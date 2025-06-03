const express = require("express"); // importiamo il modulo express (un framework che semplifica la creazione di API con node.js)
const app = express(); //creiamo un'applicazione express
const appPort = 3000; // porta su cui il server ci ascolta
const appUrl = `http://localhost:${appPort}`;
const postsRouter = require("./routers/posts"); //importiamo il router per i post che gestisce le rotte GET,POST
const cors = require("cors");
// MIDDLEWARE
const notFound = require("./middlewares/notFound"); // GESTISCE LE ROTTE NON TROVATE (404)
const checkTimeMiddleware = require("./middlewares/checkTime"); // STAPA DATA/ORA DELLA RICHIESTA
const errorHandler = require("./middlewares/errorHandler"); //GESTISCE ERRORE GLOBALI

//COURS
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// File statici
app.use(express.static("public")); // SERVONO I FILE STATICI (IMMAGINI, CSS,) PRESENTI NELLA CARTELLA "PUBLIC"
// bordy parser per per app/json
app.use(express.json()); // PARSING DEL CORPO JSON DELLE RICHIESTE (REQ.BODY) INDISPENSABILI PER POST E PUT
// checktime
app.use(checkTimeMiddleware); // LOGGA METODO, PATH E ORARIO PER OGNI RICHIESTA

app.get("/", (req, res) => {
  // "/" ROTTA BASSE DELL'APPLICAZIONE CHE RISPONDE CON UN MESSAGGIO DI BENVENUTO
  res.json("Benvenuto nel mio blog");
});

// Routes
app.use("/posts", postsRouter); // TUTTE LE RICHIESTE CON /POSTS VENGONO GESTITE DAL ROUTER

app.use(notFound); // MIDDLEWARE FINALE CHE CATTURA TUTTE LE RICHIESTE NON INTERCETTATE PRIMA E GENERA UN ERRORE 404
app.use(errorHandler); //MIDDLEWARE PER GESTIRE QUALSIASI ERRORE, RESTITUENDO UNA RISPOSTA SJON CON MESSAGGIO E CODICE DI ERRORE

// Web in ascolto AVVIA IL SERVER SULL'INDIRIZZO E PORTA DEFINITI E STAMPA IN CONSOLE IL MEGSSAGGIO DI CONFERMA
app.listen(appPort, () => {
  console.log(`Server listening on ${appUrl}`);
});
