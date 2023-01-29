const fs = require("fs-extra");
const glob = require("glob");
const log = console.log;
const path = require("path");
//const all = fs.readdirSync(__dirname); //string[] 
let dir = __dirname;
let all = glob.sync(`${dir}/**`);
const dots = glob.sync(`${dir}/.**`);
all = [...dots, ...all];
let stats = [];

all.forEach(item => {
    let stat = fs.statSync(item);
    stat.isDir = !stat.isFile();
    let obj = {
        name: path.basename(item), 
        path: item,         
        ...stat
    };
    if(!obj.isDir){
        if(obj.name.indexOf(".") > 0){
            obj.dotFile = false;
            obj.ext = obj.name.substr( obj.name.indexOf(".") );
            obj.cleanName = obj.name.substr(0, obj.name.indexOf(".") );
        }else{
            //dot file
            obj.dotFile = true;
            obj.nameExtless = obj.name;
            obj.ext = "";
        }        
    }
    stats.push(obj);
});

stats.sort((a, b) => {
    //INT Comparison
    //return b.mtime - a.mtime;
    //String comparison
    return -1 * a.name.localeCompare(b.name);
});

function loadStats(){}
function sort(){}
log(stats);
