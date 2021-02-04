import client from "./spaceClient.js";
import metaData from "./metaData.js";
import inquirer from "inquirer";
import questions from "./questions.js";
import getFiles from "./getFiles.js";
import Ora from "ora";
import chalk from "chalk";

const getPublicLink = async () => {
  const spinner = Ora();
  const { files, bucketName } = await getFiles();
  const { selectedFile } = await inquirer.prompt({
    ...questions[5],
    choices: Object.keys(files),
  });
  const meta = await metaData;
  const filePath = files[selectedFile].filePath;
  const { password } = await inquirer.prompt(questions[4]);
  spinner.start("Creating a new publicly accessable link........");
  const res = await client.generatePublicFileLink(
    { bucket: bucketName, password: password, itemPaths: [filePath] },
    meta
  );
  const fileInfo = {
    link: res.getLink(),
    fileCid: res.getFilecid(),
  };
  spinner.succeed(
    `Heres Your publicly accessable URL: \n${chalk.red(
      fileInfo.link
    )}\nCID: ${chalk.green(fileInfo.fileCid)}`
  );
};

export default getPublicLink;
