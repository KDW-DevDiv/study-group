const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const targetUrl = req.url === '/' ? '/index.html' : req.url;

  fs.readFile(__dirname + targetUrl, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('<div>404 Not Found</div>');
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

server.listen(3001);
console.log('Node server running on port 3001');
