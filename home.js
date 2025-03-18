const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === "/women") {
    res.write(`<h1>welcome to women's page</h1>`);
    return res.end();
  } else if (req.url === "/men") {
    res.write(`<h1>welcome to men's page</h1>`);
    return res.end();
  } else if (req.url === "/kids") {
    res.write(`<h1>welcome to kids page</h1>`);
  } else if (req.url === "/cart") {
    res.write(`<h1>welcome to cart page</h1>`);
    return res.end();
  } else if (req.url === "/home") {
    res.write(`<h1>welcome to homepage</h1>`);
    return res.end();
  }
  res.write(
    `<ul><li><a href='/home'>home</a></li><li><a href='/women'>women</a></li><li><a href="/men">men</a></li><li><a href="/kids">kids</a></li><li><a href="/cart">cart</a></li></ul>`
  );
});

server.listen(3000);
