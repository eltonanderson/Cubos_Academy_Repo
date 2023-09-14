const express = require("express");
const route = require("./routes");
const server = express();

const port = 3000;

server.use(express.json());

server.use(route);

server.listen(port, () => console.log(`Server listening on port ${port}!`));
