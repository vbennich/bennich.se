var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello there my friend');
});
console.log(process.env.PORT);
server.listen(process.env.PORT);
