import client from "./spaceClient.js";
import metaData from "./metaData.js";
import inquirer from "inquirer";
import questions from "./questions.js";

const createBucket = async () => {
  const { bucketName } = await inquirer.prompt(questions[1]);
  try {
    const res = await client.createBucket({ slug: bucketName }, metaData);
    const bucket = res.getBucket();
    console.log(bucket.getName());
  } catch (err) {
    console.log(err.message);
  }
};
export default createBucket;
