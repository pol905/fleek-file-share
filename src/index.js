import meta from "./metaData.js";
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
  const metaData = await meta;
  const { choice } = await inquirer.prompt(questions[0]);

  if (choice === "Get all files currently in the bucket") {
    const { files } = await getFiles(metaData);
    for (let file in files) {
      console.log(`${file} -----> ${files[file].IPFShashV1}`);
    }
  } else if (choice === "Create new bucket") {
    createBucket(metaData);
  } else if (choice === "List All Your Buckets") {
    const buckets = await listBucket(metaData);
    buckets.forEach((bucket) => console.log(bucket));
  } else if (choice === "Get Public Key") {
    getPublicKey(metaData);
  } else if (choice === "Add a new file") {
    addFile(metaData);
  } else if (choice === "Get Public share Link") {
    getPublicLink(metaData);
  } else if (choice === "Open file using Public Link") {
    openPublicLink(metaData);
  }
})();
