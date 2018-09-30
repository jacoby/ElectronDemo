const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

let filename = 'clock.html';

http.createServer(function (req, res) {
    console.log('loading');
  res.writeHeader(200,{'Content-type':'text-html'});
  var fileStream = fs.createReadStream(filename);
  fileStream.pipe(res);
}).listen(9000);
console.log('Server listening on port 9000');
