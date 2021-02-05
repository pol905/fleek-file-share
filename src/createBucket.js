import client from "./spaceClient.js";
import inquirer from "inquirer";
import questions from "./questions.js";
import Ora from "ora";

const createBucket = async (metaData) => {
  const spinner = Ora();
  const { bucketName } = await inquirer.prompt(questions[1]);
  try {
    spinner.start("Creating bucket...");
    const res = await client.createBucket({ slug: bucketName }, metaData);
    const bucket = res.getBucket();
    spinner.succeed(`Bucket ${bucket.getName()} successfully created`);
  } catch (err) {
    spinner.fail(err.message);
  }
};
export default createBucket;
