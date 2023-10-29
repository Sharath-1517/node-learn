const os = require('./os');
const path = require('./path');
const {fsCreateDir, fsWriteFile, fsReadFile} = require('./fs');


// OS package
// console.log(os.deviceInfo());

// path package
// console.log(path);

// fs package
// fsWriteFile('hello/hello.txt', `console.log("Logging from ./assets/hello")`);
fsReadFile('hello/hello.txt');


