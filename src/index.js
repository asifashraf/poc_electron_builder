const { spawn } = require('child_process');
const { app, BrowserWindow } = require('electron');
const path = require('path');


const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow();
    const cwd = process.cwd();
    const javaPath = getFullPath(`custom-jdk/bin/java`);
    const jarPath = getFullPath(`keys-1.jar`);
    runLive(javaPath, ["-jar", jarPath],
        process.cwd(),
        true,
        (outData) => {
            console.log("out data", outData);
        },
        (errData) => {
            console.log("err Data", errData);
        },
        (exitData) => {
            console.log("exit Data", exitData);
        });
});

function runLive(
    command, argsArray, cwd, detached, outCallback,
    errCallback, exitCallback) {
    let child = spawn(command, argsArray,
        {
            encoding: 'utf8',
            cwd,
            detached,
        });
    let scriptOutput = "";
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function (data) {
        data = data.toString();
        outCallback(data);
        scriptOutput += data;
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
        data = data.toString();
        errCallback(data);
        scriptOutput += data;
    });

    child.on('close', function (code) {
        exitCallback(code, scriptOutput);
    });
}

function getFullPath(relativePath) {
    // Get the current working directory
    const currentDir = process.cwd();
    // Join the current working directory with the relative file path
    const fullPath = path.join(currentDir, relativePath);
    return fullPath;
}
