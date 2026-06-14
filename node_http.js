const http = require('http');
const fs = require('fs');


function getMyFile() {

    const myFile = fs.readFileSync('./index.html', 'utf8');
    return myFile;

}


const server = http.createServer((req, res) => {
    console.log('user hit the server');

    if (req.url === '/') {

        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write(getMyFile());


    }

    else if (req.url === '/about') {

        res.writeHead(200, {
            'content-type': 'application/json'
        });

        //convert JS object to JSON
        res.write(JSON.stringify({
            id: 2,
            name: 'about'
        }));
    }

    else {
        res.writeHead(404, {
            'content-type': 'text/html'
        });
        res.write(JSON.stringify({
            error: 'error not found'
        }));

    }
    res.end();
});


server.listen(8000);
