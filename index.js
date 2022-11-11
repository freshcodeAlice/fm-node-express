const http = require('http');
const fs = require('fs/promises');


const PORT = 3000;

const requestListener = async (req, res) => {
    const {url} = req;
    if ( url === '/index.html') {
       const data = await fs.readFile('./views/index.html', 'utf-8');
        res.end(data);
    } else {
        res.statusCode = 404;
        res.end();
    }
}

const server = http.createServer(requestListener);

server.listen(PORT);