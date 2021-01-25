import client from "./spaceClient.js";
import inquirer from "inquirer";
import listBucket from "./listBucket.js";
import questions from "./questions.js";
import metaData from "./metaData.js";

const getFiles = async () => {
  const buckets = await listBucket();
  const { bucketName } = await inquirer.prompt({
    ...questions[2],
    choices: buckets,
  });
  console.log(bucketName);
  const res = await client.listDirectories({ bucket: bucketName }, metaData);
  const filesOrDirs = res.getEntriesList();
  filesOrDirs.forEach((fileOrDir) => {
    console.log(fileOrDir.getName());
  });
};

export default getFiles;
