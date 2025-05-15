const express = require("express");
const app = express();
const appPort = 3000;
const appUrl = `http://localhost:${appPort}`;
const postsRouter = require("./routers/posts");

// File statici
app.use(express.static("public"));

// bordy parser per per app/json
app.use(express.json());

// Router
app.use("/posts", postsRouter);

// Web in ascolto
app.listen(appPort, () => {
  console.log(`Server listening on ${appUrl}`);
});
