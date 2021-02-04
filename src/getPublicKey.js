import client from "./spaceClient.js";
import metaData from "./metaData.js";
import Ora from "ora";
const getPublicKey = async () => {
  const spinner = Ora();
  const meta = await metaData;
  const res = await client.getPublicKey(meta);
  spinner.info(`Your public Key is: ${res.getPublickey()}`);
  spinner.info(
    `Provide this to your friend so that he can encrypt your file with this public key`
  );
};

export default getPublicKey;
