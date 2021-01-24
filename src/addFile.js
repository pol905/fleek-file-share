import client from "./spaceClient.js";
import metaData from "./metaData.js";
import inquirer from "inquirer";
import fuzzyInquirer from "inquirer-fuzzy-path";
import listBuckets from "./listBucket.js";
import questions from "./questions.js";

inquirer.registerPrompt("fuzzypath", fuzzyInquirer);

const addFile = async () => {
  const buckets = await listBuckets();
  const { bucketName } = await inquirer.prompt({
    ...questions[2],
    choices: buckets,
  });

  const { filePath } = await inquirer.prompt(questions[3]);
  const stream = client.addItems(
    {
      bucket: bucketName,
      targetPath: "/",
      sourcePaths: [process.cwd() + "\\" + filePath],
    },
    metaData
  );
  stream.on("data", (data) => {
    console.log("successfully added the image");
    console.log(`data: ${data}`);
  });
  stream.on("error", (error) => {
    console.log(`error: ${error.message}`);
  });
  stream.on("end", () => {
    console.log("end");
  });
};

export default addFile;
