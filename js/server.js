const {getProduct, getCategory} = require("../db/config");
const http = require("http");
const fs = require("fs");
const { log } = console;

const server = http.createServer(async (req, res) => {
  if (req.url.includes("/productos") && req.method === "GET") {
    try {
      const data = await getProduct()
      res.end(JSON.stringify(data))
    } catch (error) {
      log(error)
    }
    
  }if (req.url.includes("/categorias") && req.method === "GET") {
    try {
      const data = await getCategory()
      res.end(JSON.stringify(data))
    } catch (error) {
      log(error)
    }
    
  }
  if ((req.url = "/")) {
    fs.readFile("html/index.html", "utf-8", (err, html) => {
      return res.end(html);
    });
  }
});

server.listen(5000, () => log("Servidor arriba"));
