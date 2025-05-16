const express = require("express");
const app = express();
const appPort = 3000;
const appUrl = `http://localhost:${appPort}`;
const postsRouter = require("./routers/posts");
const notFound = require("./middlewares/notFound");
const checkTimeMiddleware = require("./middlewares/checkTime");
const errorHandler = require("./middlewares/errorHandler");

// File statici
app.use(express.static("public"));
// bordy parser per per app/json
app.use(express.json());
// checktime
app.use(checkTimeMiddleware);

app.get("./", (res, req) => {
  res.json("Benvenuto nel mio blog");
});

// Routes
app.use("/posts", postsRouter);

// middlewares

app.use(notFound);
app.use(errorHandler);

// Web in ascolto
app.listen(appPort, () => {
  console.log(`Server listening on ${appUrl}`);
});
