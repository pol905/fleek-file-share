import client from "./spaceClient.js";
import metaData from "./metaData.js";

const getPublicKey = async () => {
  const res = await client.getPublicKey(metaData);
  console.log(`Your public Key is: ${res.getPublickey()}`);
  console.log(
    `Provide this to your friend so that he can encrypt your file with this public key`
  );
};

export default getPublicKey;
