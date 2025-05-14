const express = require("express");
const app = express();
const appPort = 3000;
const appUrl = `http://localhost:${appPort}`;
const postsRouter = require("./routers/posts"); // IMPORTA LE ROTTE

// File statici
app.use(express.static("public"));

// Router
app.use("/posts", postsRouter); // Usa il router per le rotte /posts

// Web in ascolto
app.listen(appPort, () => {
  console.log(`Server listening on ${appUrl}`);
});
