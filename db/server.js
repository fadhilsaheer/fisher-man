// server
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "/db.json"));
const middlewares = jsonServer.defaults();

// using mii=ddle wares
server.use(middlewares);
server.use("/api", router);
server.use(router);

// listening server on port
const SERVER_PORT = process.env.PORT || 3000;
server.listen(SERVER_PORT, () => {
  console.log("JSON Server is running");
});
