var findInFiles = require('find-in-files');
const path = require("path");
(async function(){
    let results = findInFiles.find("I'm Brian, and so's my wife!", 
    __dirname + path.sep + "files"
    , '.txt$');
    for (var result in results) {
        var res = results[result];
        console.log(
            'found "' + res.matches[0] + '" ' + res.count
            + ' times in "' + result + '"'
        );
    }
})();

















