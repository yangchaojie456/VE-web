// 简单文件服务器
const http = require("http");
const path = require("path");
const fs = require("fs");
const mime = require("mime");
const zlib = require("zlib");
const config = require("./config");

var server = {};

module.exports = {
  createServer(root) {
    server = http.createServer((request, response) => {
      // 仅仅获取文件名
      var index = request.url.indexOf("?");
      if (index > -1) {
        request.url = request.url.slice(0, index);
      }
      let filePath = path.join(root, request.url);

      fs.stat(filePath, (err, stats) => {
        let mimeType = mime.getType(filePath);
        if (err) {
          response.statusCode = 404;
          response.setHeader("content-type", mimeType);
          response.end(`${filePath} is not a file`);
          return;
        }
        if (stats.isFile()) {
          response.statusCode = 200;
          response.setHeader("content-type", mimeType);
          let readStream = fs.createReadStream(filePath);
          readStream = compress(readStream, request, response);
          readStream.pipe(response);
        } else if (stats.isDirectory()) {
          fs.readdir(filePath, (err, files) => {
            response.statusCode = 200;
            response.setHeader("content-type", mimeType);
            response.end(files.join(",\n"));
          });
        }
      });
    });
    return server;
  },
  listen(cb) {
    server.listen(config.port, config.host, () => {
      const addr = `http://${config.host}:${config.port}`;
      console.info(`server started at ${addr}`);
      cb();
    });
  },
};

function compress(readStream, request, response) {
  const acceptEncoding = request.headers["accept-encoding"];

  if (!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)) {
    return readStream;
  } else if (acceptEncoding.match(/\bgzip\b/)) {
    response.setHeader("Content-Encoding", "gzip");
    return readStream.pipe(zlib.createGzip());
  } else if (acceptEncoding.match(/\bdeflate\b/)) {
    response.setHeader("Content-Encoding", "deflate");
    return readStream.pipe(zlib.createDeflate());
  }
}
