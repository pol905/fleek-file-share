import metaData from "./metaData.js";
import createBucket from "./createBucket.js";
import inquirer from "inquirer";
import addFile from "./addFile.js";
import getPublicKey from "./getPublicKey.js";
import listBucket from "./listBucket.js";
import questions from "./questions.js";
import getFiles from "./getFiles.js";
import getPublicLink from "./getPublicLink.js";
import openPublicLink from "./openPublicLink.js";

(async () => {
  await metaData;
  const { choice } = await inquirer.prompt(questions[0]);
  if (choice === `get all files currently in the bucket`) {
    const { files } = await getFiles();
    for (let file in files) {
      console.log(`${file} -----> ${files[file].IPFShashV1}`);
    }
  } else if (choice === `Create new bucket`) {
    createBucket();
  } else if (choice === `List All Your Buckets`) {
    const buckets = await listBucket();
    buckets.forEach((bucket) => console.log(bucket));
  } else if (choice === `Get Public Key`) {
    getPublicKey();
  } else if (choice === `Add a new file`) {
    addFile();
  } else if (choice === `Get Public share Link`) {
    await getPublicLink();
  } else if (choice === `Open file using Public Link`) {
    await openPublicLink();
  }
})();
