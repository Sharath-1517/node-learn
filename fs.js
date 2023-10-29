const fs = require('fs');

function fsCreateDir() {
  fs.mkdir('fs', (e) => {
    if (e) {
      console.log(e);
    } else {
      console.log("Successfully created dir...");
    }
  });
}

function fsWriteFile(fileName, fileContent) {
  fs.writeFile(`./assets/${fileName}`, fileContent, { flag: 'a' }, (e) => {
    if (e) console.log(e);
    else console.log("File written successfully");
  })
}

function fsReadFile(fileName) {
  fs.readFile(`./assets/${fileName}`, {encoding: 'utf-8'}, (e, data) => {
    if(e) console.log(e);
    else {
      console.log(`Here is your data from ${fileName}\n`)
      console.log(data);
    }
  })
}

module.exports = {
  fsCreateDir: fsCreateDir,
  fsWriteFile: fsWriteFile,
  fsReadFile: fsReadFile
};