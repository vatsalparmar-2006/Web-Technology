const childProcess = require('child_process');

childProcess.exec('Demo.py', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Standard Error: ${stderr}`);
        return;
    }
    console.log("\n" + stdout);
});
