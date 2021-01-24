import fs from "fs-extra";

const { token } = await fs.readJSON("./masterToken.json");

const metaData = {
  authorization: `AppToken ${token}`,
};

export default metaData;
