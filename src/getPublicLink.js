import client from "./spaceClient.js";
import inquirer from "inquirer";
import questions from "./questions.js";
import getFiles from "./getFiles.js";
import Ora from "ora";
import chalk from "chalk";

const getPublicLink = async (metaData) => {
  const spinner = Ora();
  const { files, bucketName } = await getFiles(metaData);
  const { selectedFile, password } = await inquirer.prompt([
    {
      ...questions[5],
      choices: Object.keys(files),
    },
    questions[4],
  ]);
  const filePath = files[selectedFile].filePath;
  spinner.start("Creating a new publicly accessible link........");
  const res = await client.generatePublicFileLink(
    { bucket: bucketName, password: password, itemPaths: [filePath] },
    metaData
  );
  const fileInfo = {
    link: res.getLink(),
    fileCid: res.getFilecid(),
  };
  spinner.succeed(
    `Heres Your publicly accessible URL and the CID: \nURL: ${chalk.red(
      fileInfo.link
    )}\nCID: ${chalk.green(fileInfo.fileCid)}`
  );
};

export default getPublicLink;
