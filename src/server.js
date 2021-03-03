require("dotenv").config();
const http = require("http");
// const url = require("url");
// const monsters = require("../controllers/monsters");

exports.nodeServer = http
  .createServer((req, res) => {
    console.log(req.url);
  })
  .on("error", (err) => {
    throw error;
  });
