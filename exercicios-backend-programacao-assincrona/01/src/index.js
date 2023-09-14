const express = require("express");
const route = require("./routes");
const server = express();

server.use(route);

server.listen(3000);
