const express = require("express"); // IMPORTIAMO EXPRESS, NECESSARIO PER CREARE UN ROUTER
const router = express.Router(); // CREAIAMO OGGETTO ROUTER PER PERMETTERCI DI GESTIRE GRUPPI DI ROTTE SEPARATAMENTE DAL FILE PRINCIPALE APP.JS
const postsController = require("../controllers/postsController");

// INDEX == RESTITUISCE TUTTI I POST
router.get("/", postsController.index); // RICHIAMA LA FUNZIONE INDEX PER RESTITUIRE TUTTI I POST

// SHOW == RESTITUISCE UN SINGOLO POST
router.get("/:id", postsController.show); // RESTITUISCE UN SINGOLO POST CON L'ID SPECIFICATO

// CREATE == CREA UN NUOVO POST
router.post("/", postsController.store); //CREA UN NUOVO POST USANDO I DATI ICEVUTI NEL CORPO DELLA RICHIESTA (REQ.BODY)

// UPDATE == MODIFICA UN POST ESISTENTE
router.put("/:id", postsController.update); // AGGIORNA UN POST ESISTENTE CON L'ID SPECIFICATO

// DELETE == CANCELLA UN POST
router.delete("/:id", postsController.destroy); // ELIMINA IL POST CORRISPONDENTRE ALL'ID

module.exports = router;
