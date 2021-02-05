const questions = [
  {
    type: "list",
    name: "choice",
    choices: [
      "Create new bucket",
      "Get all files currently in the bucket",
      "List All Your Buckets",
      "Get Public Key",
      "Add a new file",
      "Get Public share Link",
      "Open file using Public Link",
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
    type: "filefolder",
    name: "filePath",
    message: "Please select the file",
    dialog: {
      type: "OpenFileDialog",
      config: {
        title: "Open",
      },
    },
    validate: function (file) {
      if (file.length === 0) {
        throw new Error(
          "No file selected!!! Press <Enter> to select the file again"
        );
      }
      return true;
    },
  },
  {
    type: "input",
    name: "password",
    message: "Enter password",
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
