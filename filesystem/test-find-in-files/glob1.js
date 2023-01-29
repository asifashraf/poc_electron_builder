var glob = require("glob");
const path = require("path");
// options is optional
glob(__dirname + path.sep + "files/*.js", {}, function (er, files) {
    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        console.log(file);
    }
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
});