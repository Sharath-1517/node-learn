const path = require('path');

const testPath = '/Users/sharathlingam_s/Desktop/nodeapp/path.js';

const pathInfo = {
  fileName: path.basename(testPath),
  folderName: path.dirname(testPath),
  fileExtension: path.extname(testPath),
  absoluteOrNot: path.isAbsolute(testPath),
  detailedInfo: path.parse(testPath),
}

module.exports = pathInfo