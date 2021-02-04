import client from "./spaceClient.js";
import metaData from "./metaData.js";
import inquirer from "inquirer";
import fuzzyInquirer from "inquirer-fuzzy-path";
import listBuckets from "./listBucket.js";
import questions from "./questions.js";
import Ora from "ora";
import ora from "ora";

inquirer.registerPrompt("fuzzypath", fuzzyInquirer);

/**
 * Adds a file to the bucket that you select.
 * @return {void}
 */
const addFile = async () => {
  const spinner = Ora();
  const buckets = await listBuckets();
  const { bucketName } = await inquirer.prompt({
    ...questions[2],
    choices: buckets,
  });

  const { filePath } = await inquirer.prompt(questions[3]);
  const meta = await metaData;
  const stream = client.addItems(
    {
      bucket: bucketName,
      targetPath: "/",
      sourcePaths: [process.cwd() + "\\" + filePath],
    },
    meta
  );
  spinner.start("Adding the image");
  stream.on("data", (data) => {
    spinner.succeed("successfully added the image");
    spinner.info(`data: ${data}`);
  });
  stream.on("error", (error) => {
    spinner.fail(`error: ${error.message}`);
  });
  stream.on("end", () => {
    spinner.info("end");
  });
};

export default addFile;
