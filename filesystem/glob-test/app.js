const glob = require("glob")
const log = console.log;
// options is optional
glob("**", {
    matchBase:false
}, function (er, files) {
    log("*.js", files);
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
})