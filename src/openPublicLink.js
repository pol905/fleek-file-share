import client from "./spaceClient.js";
import inquirer from "inquirer";
import questions from "./questions.js";
import metaData from "./metaData.js";
import fs from "fs-extra";
import Ora from "ora";
import chalk from "chalk";

const openPublicFile = async (metaData) => {
  const { publicLink, password } = await inquirer.prompt([
    questions[6],
    questions[4],
  ]);
  const spinner = Ora();
  const p2 = /hash/;

  const CIDIndex = publicLink.search(p2);
  const filename = publicLink.substring(44, CIDIndex - 1);
  const fileCid = publicLink.substring(CIDIndex + 5);
  spinner.start(chalk.cyanBright("Fetching your file......."));
  try {
    const res = await client.openPublicFile(
      {
        fileCid,
        filename,
        password,
      },
      metaData
    );
    const tempPath = res.getLocation();
    await fs.ensureDir("../_out");
    const newPath = "../_out/" + filename;
    fs.renameSync(tempPath, newPath);
    spinner.succeed(`Your file is at: ${chalk.blueBright(newPath)}`);
  } catch (err) {
    spinner.fail(err.message);
  }
};

export default openPublicFile;
