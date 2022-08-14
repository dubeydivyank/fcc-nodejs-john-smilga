//HTTP module

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home Page");
  }
  if (req.url === "/about") {
    res.end("<div>About us</div>");
  }
  res.end(`<h1>page doesnt exist</h1>`);
});

server.listen(5000);
