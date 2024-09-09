const childProcess = require('child_process');

childProcess.exec('javac Demo.java', (error, stdout, stderr) => {
    if (error) {
        console.error(`Compilation Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Compilation Standard Error: ${stderr}`);
        return;
    }

    console.log('\nJava program compiled successfully!');

    // After compilation, run the Java program
    childProcess.exec('java Demo', (error, stdout, stderr) => {
        if (error) {
            console.error(`Execution Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Execution Standard Error: ${stderr}`);
            return;
        }

        console.log('\n' , stdout);
    });
});