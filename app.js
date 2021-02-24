const http = require("http");
const url = require("url");
const monsters = require("./controllers/monsters");

const hostname = "127.0.0.1";
const port = 3000;

const server = http
  .createServer((req, res) => {
    const requestHaveQueryParam = url.parse(req.url).query;
    if (req.url.includes("/monsters")) {
      if (!requestHaveQueryParam && req.url === "/monsters/all") {
        monsters.getAllMonsters();
      } else if (requestHaveQueryParam) {
        monsters.getMonster(requestHaveQueryParam.split("=")[1]);
      }
    }
  })
  .on("error", (error) => {
    throw error;
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  // console.log(server.address());
  // to get address, IP family and port
});

// https://medium.com/@grantspilsbury/dry-node-js-server-code-without-express-4db391a9ac60
// https://www.youtube.com/watch?v=H9fg7GFagF4&list=PLgTkNlNsy9gVPkxTJry5zb5V8UwLZhw3q&index=1
