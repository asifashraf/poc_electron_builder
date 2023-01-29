class File{
    copy(from, to){
        /*
        * const fs = require('fs');
        const { COPYFILE_EXCL } = fs.constants;

        // destination.txt will be created or overwritten by default.
        fs.copyFileSync('source.txt', 'destination.txt');
        console.log('source.txt was copied to destination.txt');

        // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
        fs.copyFileSync('source.txt', 'destination.txt', COPYFILE_EXCL);
        *
        *
        * */
    }

    async move(from, to){
        /*
        https://github.com/jprichardson/node-fs-extra/blob/HEAD/docs/move.md

        * const fs = require('fs-extra');
        const src = '/tmp/file.txt';
        const dest = '/tmp/this/path/does/not/exist/file.txt';
        *try {
            await fs.move(src, dest)
            console.log('success!')
          } catch (err) {
            console.error(err)
          }
        *
        *
        * */
    }

    rename(from, to){
        /*
        * const fs = require("fs");
        * fs.renameSync('oldFile.txt', 'newFile.txt', (err) => {
          if (err) throw err;
          console.log('Rename complete!');
        });
        * */
    }
    //size(path){}
    empty(path){
        /*
        const fs = require('fs')
        fs.writeFile('/path/to/file', '', function(){console.log('done')})
        * */
    }
    create(path, text){
        /*
        const fs = require('fs')
        fs.writeFile('/path/to/file', text, function(){console.log('done')})
        //Sync
        fs.writeFileSync(file, data[, options])
         */
    }
    append(path, text){
        /*
        * const fs = require('fs');
        fs.appendFileSync('message.txt', 'data to append');
        * */
    }
}

export default File;