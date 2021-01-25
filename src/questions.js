const questions = [
  {
    type: "list",
    name: "choice",
    choices: [
      `Initialize the client (Run only once in the beginning)`,
      `Create new bucket`,
      `get all files currently in the bucket`,
      `List All Your Buckets`,
      `Get Public Key`,
      `Add a new file`,
      `Get Public share Link`,
    ],
  },
  {
    type: "input",
    name: "bucketName",
    message: "Enter the bucket name",
  },
  {
    type: "list",
    name: "bucketName",
    message: "Pick the bucket in which you want to add the file to",
  },
  {
    type: "fuzzypath",
    name: "filePath",
    excludePath: (nodePath) => nodePath.startsWith("..\\node_modules"),
    itemType: "file",
    rootPath: "../",
    message: "Select a file to add to your bucket",
    suggestsOnly: false,
  },
];

export default questions;
