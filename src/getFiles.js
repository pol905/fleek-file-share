import client from "./spaceClient.js";
import inquirer from "inquirer";
import listBucket from "./listBucket.js";
import questions from "./questions.js";
import metaData from "./metaData.js";

const getFiles = async () => {
  try {
    const buckets = await listBucket();
    const { bucketName } = await inquirer.prompt({
      ...questions[2],
      choices: buckets,
    });
    const meta = await metaData;
    const res = await client.listDirectories({ bucket: bucketName }, meta);
    const filesOrDirs = res.getEntriesList();
    const files = {};
    filesOrDirs.forEach((fileOrDir) => {
      files[fileOrDir.getName()] = {
        IPFShashV1: fileOrDir.getIpfshash(),
        filePath: fileOrDir.getPath(),
        isDirectory: fileOrDir.getIsdir(),
      };
    });
    return { files, bucketName };
  } catch (err) {
    console.log(err.message);
  }
};

export default getFiles;
