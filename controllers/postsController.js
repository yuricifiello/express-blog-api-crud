const { posts } = require("../data/posts");

// INDEX
const index = (req, res) => {
  res.json(posts);
};

// SHOW
const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.json({
      error: "Not found",
      message: "Post non trovato",
    });
  }
  res.json(post);
};

// CREATE
const store = (req, res) => {
  console.log("Dati ricevuti:", req.body);
  // Creiamo un nuovo id incrementando l'ultimo id presente
  const newId = posts[posts.length - 1].id + 1;
  // Creiamo un nuovo oggetto pizza
  const newPost = {
    id: newId,
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    tags: req.body.tags,
  };
  // Aggiungiamo la nuova pizza al menu
  posts.push(newPost);
  // controlliamo
  console.log(posts);

  // Restituiamo lo status corretto e la pizza appena creata
  res.status(201).json(newPost);
};

// UPDATE
const update = (req, res) => {
  const id = req.params.id;
  res.send(`Modifica del post ` + id);
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
