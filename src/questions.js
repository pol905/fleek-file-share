const questions = [
  {
    type: "list",
    name: "choice",
    choices: [
      `Create new bucket`,
      `get all files currently in the bucket`,
      `List All Your Buckets`,
      `Get Public Key`,
      `Add a new file`,
      `Get Public share Link`,
      `Open file using Public Link`,
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
  {
    type: "input",
    name: "password",
    message: "Enter a password",
  },
  {
    type: "list",
    name: "selectedFile",
    message: "Select a file for which you want to create a public link",
  },
  {
    type: "input",
    name: "publicLink",
    message: "Enter the URL: ",
  },
];

export default questions;
