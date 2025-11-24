const fs = require("fs");

const requestHandler = (req,res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Hey Node</title></head>");
    res.write(
      '<body><form action="/messages" method="post"><input name="name" type="text"/><button type="submit">send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/messages" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("chunk--- ", chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const reqData = Buffer.concat(body).toString();
      const parseReq = reqData.split("=")[1];
      fs.writeFile("message.txt", parseReq, (err) => {
        console.log(err);
        res.statusCode = "302";
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hey Node</title></head>");
  res.write("<body>Hey Hani, you are so beautiful...</body>");
  res.write("</html>");
  res.end();
}

module.exports = requestHandler;