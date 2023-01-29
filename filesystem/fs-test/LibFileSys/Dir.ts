const mergedirs = require('merge-dirs').default;
const fse = require('fs-extra');
const fs = require("fs");
const path = require("path");
const glob = require("glob");

class Dir{

    /*  full dir path/* for same undeep search
        full dir/** for deep search

        ALWAYS SEND FULL DIR PATH AND PATTERN
     */
    find(searchPattern){
        const all = glob.sync(searchPattern);
        let stats = [];
        all.forEach(item => {
            let stat = fs.statSync(item);
            stat.isDir = !stat.isFile();
            stats.push({name: path.basename(item), path: item, ...stat, extension: path.extname(item)});
        });
        stats.sort((a, b) => {
            //INT Comparison
            return b.mtime - a.mtime;
            //String comparison
            //return -1 * a.name.localeCompare(b.name);
        });
        return stats;
    }

    aggregate(path){
        /*
      const fs = require('fs');
      const dir = './directory';
      fs.readdir(dir, (err, files) => {
        console.log(files.length);
      });
          */



    } //files folder

    copy(from, to) {
        fse.ensureDirSync(to);
        fse.copySync(from, to);
    }
    empty(path){
        /*
        use fs extra empty

        */

    }

    exists(path){
        const fs = require("fs"); // Or `import fs from "fs";` with ESM
        return fs.existsSync(path);
    }

    merge(from, to, overwrite = true){
        fse.ensureDirSync(to);
        if(overwrite){
            mergedirs(from, to, 'overwrite');
        }else{
            mergedirs(from, to);
        }

    }

    move(from, to, overwrite = true){
        fse.moveSync(from, to, { overwrite: overwrite })
    }

    put(path){
        fse.ensureDirSync(path);
    }

    rename(from, to){
        fs.renameSync(from, to);
    }

    searchFileNames(){
        /*
        var glob = require("glob");
        const path = require("path");
        // options is optional
        glob(__dirname + path.sep + "files/*.js", {}, function (er, files) {
            for (let index = 0; index < files.length; index++) {
                const file = files[index];
                console.log(file);
            }
            });
        */
    }

    searchText(path, text){
        /*
        For regex and simple text:
        var findInFiles = require('find-in-files');
        const path = require("path");
        (async function(){
            let results = await findInFiles.find("I'm Brian, and so's my wife!",
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
        */
    }

    size(path){
    /*
    var fs = require('fs'),
    path = require('path'),
    async = require('async');

    function readSizeRecursive(item, cb) {
      fs.lstat(item, function(err, stats) {
        if (!err && stats.isDirectory()) {
          var total = stats.size;

          fs.readdir(item, function(err, list) {
            if (err) return cb(err);

            async.forEach(
              list,
              function(diritem, callback) {
                readSizeRecursive(path.join(item, diritem), function(err, size) {
                  total += size;
                  callback(err);
                });
              },
              function(err) {
                cb(err, total);
              }
            );
          });
        }
        else {
          cb(err);
        }
      });
    }
    
    */
    
    }

















    searchTextInEditorFile(){
        /*
        * Monaco has built in find?
        * https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.itextmodel.html#findmatches
        * */
    }


}


export default Dir;