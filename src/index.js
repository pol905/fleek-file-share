import XMLRequest from "xmlhttprequest";
import createBucket from "./createBucket.js";
import inquirer from "inquirer";
import addFile from "./addFile.js";
import generateMasterToken from "./generateMasterToken.js";
import getPublicKey from "./getPublicKey.js";
import listBucket from "./listBucket.js";
import questions from "./questions.js";
import getFiles from "./getFiles.js";

global.XMLHttpRequest = XMLRequest.XMLHttpRequest;

(async () => {
  const answer = await inquirer.prompt(questions[0]);
  if (
    answer.choice === `Initialize the client (Run only once in the beginning)`
  ) {
    generateMasterToken();
  } else if (answer.choice === `get all files currently in the bucket`) {
    getFiles();
  } else if (answer.choice === `Create new bucket`) {
    createBucket();
  } else if (answer.choice === `List All Your Buckets`) {
    const buckets = await listBucket();
    buckets.forEach((bucket) => console.log(bucket));
  } else if (answer.choice === `Get Public Key`) {
    getPublicKey();
  } else if (answer.choice === "Add a new file") {
    addFile();
  }
})();
