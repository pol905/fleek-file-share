import client from "./spaceClient.js";
import metaData from "./metaData.js";
import listBuckets from "./listBucket.js";
import inquirer from "inquirer";
import questions from "./questions.js";
import getFiles from "./getFiles.js";

const getPublicLink = async () => {
  const { files, bucketName } = await getFiles();
  const { selectedFile } = await inquirer.prompt({
    ...questions[5],
    choices: Object.keys(files),
  });
  const filePath = files[selectedFile].filePath;
  const { password } = await inquirer.prompt(questions[4]);
  const res = await client.generatePublicFileLink(
    { bucket: bucketName, password: password, itemPaths: [filePath] },
    metaData
  );
  const fileInfo = {
    link: res.getLink(),
    fileCid: res.getFilecid(),
  };
  console.log(fileInfo);
};

export default getPublicLink;
