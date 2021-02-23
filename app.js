const http = require("http");
const url = require("url");
const monsters = require("./controllers/monsters");
const errors = require("./errors");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const requestHaveQueryParam = url.parse(req.url).query;
  if (req.url.includes("/monsters")) {
    if (!requestHaveQueryParam && req.url === "/monsters/all") {
      monsters.getAllMonsters();
    } else if (requestHaveQueryParam) {
      monsters.getMonster(requestHaveQueryParam.split("=")[1]);
    }
  } else {
    throw Error(`${errors.WRONG_PATH}`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
