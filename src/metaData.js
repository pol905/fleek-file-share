import fs from "fs-extra";
import generateMasterToken from "./generateMasterToken.js";
import Ora from "ora";

const initializeDaemon = async () => {
  let metaData;
  const spinner = Ora();
  if (!fs.existsSync("./masterToken.json")) {
    spinner.start("Daemon uninitialized. Initializing..........");
    await generateMasterToken();
    spinner.succeed("Initialized space daemon successfully.");
  }
  const { token } = fs.readJSONSync("./masterToken.json");
  metaData = {
    authorization: `AppToken ${token}`,
  };
  return metaData;
};

export default initializeDaemon();
