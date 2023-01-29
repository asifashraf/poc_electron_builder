const mergedirs = require('merge-dirs').default;
const fse = require('fs-extra');
const path = require("path");

const path1 = __dirname + path.sep + 'folder/a';
const path2 = __dirname + path.sep + 'folder/b';
fse.ensureDirSync(path2);
// copy folder/a into folder/b
//mergedirs('/folder/a', '/folder/b');
// copy folder/a into folder/b with conflict resolution 'overwrite'
mergedirs(path1, path2, 'overwrite');
// copy folder/a into folder/b with conflict resolution 'ask'
////mergedirs('/folder/a', '/folder/b', 'ask');
// copy folder/a into folder/b with conflict resolution 'skip'
////mergedirs('/folder/a', '/folder/b', 'skip');