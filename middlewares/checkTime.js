const checkTime = (req, res, next) => {
  const now = new Date();
  const currHours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const currMinutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const currSeconds =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  const currTime = `${currHours}:${currMinutes}:${currSeconds}`;
  console.log(
    `Richiesta ${req.method} ricevuta al path "${req.path}" alle ore ${currTime}`
  );

  next();
};

module.exports = checkTime;
