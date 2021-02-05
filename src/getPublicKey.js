import client from "./spaceClient.js";
import Ora from "ora";

const getPublicKey = async (metaData) => {
  const spinner = Ora();
  const res = await client.getPublicKey(metaData);
  spinner.info(`Your public Key is: ${res.getPublickey()}`);
  spinner.info(
    `Provide this to your friend so that he can encrypt your file with this public key`
  );
};

export default getPublicKey;
