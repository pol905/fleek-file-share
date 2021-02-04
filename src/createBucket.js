import client from "./spaceClient.js";
import metaData from "./metaData.js";
import inquirer from "inquirer";
import questions from "./questions.js";
import Ora from "ora";
import ora from "ora";

const createBucket = async () => {
  const spinner = Ora();
  const { bucketName } = await inquirer.prompt(questions[1]);
  const meta = await metaData;
  try {
    spinner.start("Creating bucket...");
    const res = await client.createBucket({ slug: bucketName }, meta);
    const bucket = res.getBucket();
    spinner.succeed(`Bucket ${bucket.getName()} successfully created`);
  } catch (err) {
    spinner.fail(err.message);
  }
};
export default createBucket;
