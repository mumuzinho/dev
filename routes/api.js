const express = require("express");
const router = express.Router();

const alunoController = require("../controllers/alunoController");

router.get("/alunos", alunoController.get);

router.post("/alunos", alunoController.create);

router.put("/alunos/:cpf", alunoController.update);

router.delete("/alunos/:cpf", alunoController.delete);

module.exports = router;