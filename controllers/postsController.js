const posts = require("../data/posts");

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
  res.send("Creazione di un nuovo post");
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

  posts.splice(posts.indexof(post), 1);
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
