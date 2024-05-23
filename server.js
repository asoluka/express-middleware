const http = require("http");
const app = require("./src/app");

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("Server listening at port: 8000");
});
