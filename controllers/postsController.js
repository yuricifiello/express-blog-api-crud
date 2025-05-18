const { posts } = require("../data/posts"); //  IMPORTARE ARRAY POSTS

// INDEX ==
const index = (req, res) => {
  //LEGGE RICHIESTA REQ
  res.json(posts); //RISPONDE CON TUTTI I POSTO CONVERTITI IN JSON
};

// # TEST ERRORE INTERNO 500
// const index = (req, res) => {
// throw new Error("Errore interno di test");
// };

// SHOW
const show = (req, res) => {
  const id = parseInt(req.params.id); // prendiamo id dall'url e convertire in numero
  const post = posts.find((post) => post.id === id); // si cerca un post che ha quell'id

  if (!post) {
    return res.json({
      error: "Not found",
      message: "Post non trovato",
    });
  } // se non lo troviamo restituiamo un messaggio d'errore
  res.json(post); //altriemnti restituiamo il post trovato
};

// CREATE
const store = (req, res) => {
  console.log("Dati ricevuti:", req.body); //stampiamo i dati ricevutinel corpo della richiesta
  const newId = posts[posts.length - 1].id + 1; // generiamo un nuovo id incrementando l'ultimo id presente
  // Creiamo un nuovo oggetto post
  const newPost = {
    id: newId,
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    tags: req.body.tags,
  };
  // Aggiungiamo il nuovo post all'array e lo stampiamo
  posts.push(newPost);
  console.log(posts);

  // Restituiamo il nuovo post e lo status 201
  res.status(201).json(newPost);
};

// UPDATE
const update = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  // Piccolo controllo
  if (!post) {
    res.status(404);
    res.json({
      error: "404 Not Found",
      message: "Post non trovata",
    });
    return;
  }
  // Aggiorniamo le propietà del post
  post.title = req.body.title;
  post.image = req.body.image;
  post.content = req.body.content;
  post.tags = req.body.tags;
  // stampiamo l'elenco aggiornato e restituiamo il post modificato
  console.log(posts);
  res.json(post);
};

// DELETE
const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404);

    return res.json({
      status: 404,
      errore: "Not found",
      message: "Post non trovato",
    });
  }
  // RIMUOVIAMO IL POST DELL'ARRAY, STAMPIAMO E RESTITUIAMO 204
  posts.splice(posts.indexOf(post), 1);
  console.log(posts);
  res.sendStatus(204);
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
