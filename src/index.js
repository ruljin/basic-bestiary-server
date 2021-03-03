require("dotenv").config();
const server = require("./server");
const status = require("http-status");

const hostname = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT || 3000;

server.nodeServer.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
