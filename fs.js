const fs = require('fs');

// function fsCreateDir() {
//   fs.mkdir('./assets/fs', (e) => {
//     if (e) {
//       console.log(e);
//     } else {
//       console.log("Successfully created dir...");
//     }
//   });
// }

// function readDir(folderName="./assets") {
//   fs.readdir(folderName, (error, files) => {
//     if(error) console.log(error);
//     else console.log(files);
//   })
// }

// function deleteFile(filePath) {
//   fs.unlink(filePath, (error) => {
//     if(error) console.log(error);
//     else console.log("Deleted file successfully...");
//   })
// }

// function fsWriteFile(fileName, fileContent) {
//   fs.writeFile(`./assets/${fileName}`, fileContent, { flag: 'a' }, (e) => {
//     if (e) console.log(e);
//     else console.log("File written successfully");
//   })
// }

// function fsReadFile(fileName) {
//   fs.readFile(`${fileName}`, {encoding: 'utf-8'}, (e, data) => {
//     if(e) console.log(e);
//     else {
//       console.log(200, "content found");
//     }
//   })
// }


function fsReadFileSync(fileName) {
  fs.readFileSync(`${fileName}`)
}

module.exports = {
  // fsCreateDir: fsCreateDir,
  // fsWriteFile: fsWriteFile,
  // fsReadDir: readDir,
  // fsDeleteFile: deleteFile
  // fsReadFile: fsReadFile,
  fsReadFileSync: fsReadFileSync
};