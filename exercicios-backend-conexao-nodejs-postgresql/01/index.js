const express = require("express");
const appRouter = require("./routes");
const app = express();
const port = 3000;

app.use(express.json());
app.use(appRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));
