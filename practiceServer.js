var http = require("http");

var server = http.createServer(function(req, res) {

  res.writeHead(200, {"Content-Type": "text/plain"});

  res.end("Server time on 4567");

});

server.listen(4567);

console.log("Server Listening on port 4567");
