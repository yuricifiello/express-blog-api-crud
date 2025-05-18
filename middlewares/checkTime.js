const checkTime = (req, res, next) => {
  // DEFINIZIONE DEL MIDDLEWARE: RICEVE REQ,RES,NEXT
  const now = new Date(); // ORA ATTUALE
  const currHours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours(); // FORMATTA ORE, MINUTI E SECONDI CON UNO 0 DAVANTI SE SONO <10
  const currMinutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes(); //  FORMATTA ORE, MINUTI E SECONDI CON UNO 0 DAVANTI SE SONO <10
  const currSeconds =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds(); //  FORMATTA ORE, MINUTI E SECONDI CON UNO 0 DAVANTI SE SONO <10
  const currTime = `${currHours}:${currMinutes}:${currSeconds}`; // COMBINARE TUTTO IN UNA STRINA HH:MM:SS
  console.log(
    `Richiesta ${req.method} ricevuta al path "${req.path}" alle ore ${currTime}`
  ); // STAMPIAMO IN CONSOLE IL TIPO DI RCHIESTA (GET, POST...), IL PERCORSO RICHIESTO (/POSTS) E L'ORA

  next(); //PASSIAMO AL MIDDLEWARE O HANDLER SUCCESSIVO
};

module.exports = checkTime;
