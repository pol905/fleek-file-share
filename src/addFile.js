import client from "./spaceClient.js";
import inquirer from "inquirer";
import fileFolderDialog from "inquirer-filefolder-prompt";
import listBuckets from "./listBucket.js";
import questions from "./questions.js";
import Ora from "ora";

inquirer.registerPrompt("filefolder", fileFolderDialog);

/**
 * Adds a file to the bucket that you select.
 * @return {void}
 */
const addFile = async (metaData) => {
  const spinner = Ora();
  const buckets = await listBuckets(metaData);
  const { bucketName, filePath } = await inquirer.prompt([
    {
      ...questions[2],
      choices: buckets,
    },
    questions[3],
  ]);

  const stream = client.addItems(
    {
      bucket: bucketName,
      targetPath: "/",
      sourcePaths: [filePath],
    },
    metaData
  );

  spinner.start("Adding the image\n");

  stream.on("data", (data) => {
    const [file, hash] = data["array"][0];
    spinner.succeed("successfully added the image!!");
    spinner.info(`${file} -----------> ${hash}`);
  });

  stream.on("error", (error) => {
    spinner.fail(`error: ${error.message}`);
  });
};

export default addFile;
