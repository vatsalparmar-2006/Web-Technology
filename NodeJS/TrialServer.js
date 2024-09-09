const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    // const url=req.url;
    res.setHeader('Content-Type', 'text/html');

    if (req.url == '/') {
        fs.readFile('../UMS/MainPage.html', (err, data) => {
            res.write(data);
            res.end();
            console.log("hhh");
        });
    }
    else if (req.url == '/Feedback') {
        fs.readFile('../UMS/Feedback.html', (err, data) => {
            res.writeHead(200, 'text/html');
            res.write(data);
            res.end();
        });
    }
    else if (req.url == '/TimeTable') {
        fs.readFile('../UMS/TimeTable.html', (err, data) => {
            res.writeHead(200, 'text/html');
            res.write(data);
            res.end();
        });
    }
    else {
        res.end("404");
    }
    // else if(url.includes("/UMS")){
    //     fs.readFile('./UMS/MainPage.html',(err,data)=>{
    //         res.writeHead(200,'text/html');
    //         res.write(data);
    //         res.end();
    //     });
    // }
});

server.listen(3000, () => {
    console.log("Success");
});