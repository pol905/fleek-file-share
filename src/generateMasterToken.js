import client from "./spaceClient.js";
import fs from "fs-extra";

const generateMasterToken = async () => {
  try {
    const initializeMasterAppTokenRes = await client.initializeMasterAppToken();
    const token = initializeMasterAppTokenRes.getApptoken();
    await fs.ensureFile("./masterToken.json");
    await fs.writeJSON("./masterToken.json", { token });
    await client.generateKeyPairWithForce({
      authorization: `AppToken ${token}`,
    });
  } catch (err) {
    console.log(err);
  }
};
export default generateMasterToken;
