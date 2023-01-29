const fs = require('fs');

const pathsToCheck = ['3.txt', '2.txt'];

for (let i = 0; i < pathsToCheck.length; i++) {
  fs.stat(__dirname + "/" + pathsToCheck[i], function(err, stats) {
    console.log(pathsToCheck[i], stats);
  });
}