var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello Crime App');
  console.log('Our Crime Map App is server is running on port 8080')
  res.end();
}).listen(8080);