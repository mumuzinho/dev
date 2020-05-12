//Mapeamento das rotas
const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const alunoController = require("../controllers/alunoController");
const turmaController = require("../controllers/turmaController");
const authMiddleware = require("../middlewares/authMiddleware");

//Autenticação do aluno = user 
/**  
 * @swagger
 * /api/alunos/login:
 *  post:
 *    descripition: Use para retornar logar
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: aluno
 *        descripition: email do aluno
 *        in: body
 *        required: true
 *        type: object
 *      - name: senha
 *        descripition: senha do aluno
 *        in: body
 *        required: true
 *        type: object
 *    responses:
 *      '200':
 *          descripition: {alunos}
*/
router.post("/alunos/login", alunoController.login);
router.get("/alunos/:id", alunoController.getById);
router.put("/alunos/:id", alunoController.update);

//Autenticação Administrador = admin
router.post("/autenticacao", authController.authentication);

//usando middleware para autorização
router.use(authMiddleware);

//rotas do crud do aluno
/**  
 * @swagger
 * /api/alunos:
 *  get:
 *    description: Use para retornar todos os alunos
 *    responses:
 *      '200':
 *          description: {alunos}
*/
router.get("/alunos", alunoController.get);

router.post("/alunos", alunoController.create);
router.delete("/alunos/:id", alunoController.delete);

//rotas do crud do turma
router.post("/turmas", turmaController.create);

/**  
 * @swagger
 * /api/turmas:
 *  get:
 *    description: Use para retornar todas as turmas
 *    responses:
 *      '200':
 *          description: {turmas}
*/
router.get("/turmas", turmaController.get);
router.put("/turmas/:id", turmaController.update);
router.delete("/turmas/:id", turmaController.delete);


module.exports = router;

// Desenvolver backend com autenticação e autorização FEITO
// Prover API de login FEITO
// Prover ao menos dois papéis (admin e user) FEITO
// Disponibilizar API para ser exibida via swagger
// Prover API CRUD para duas informações além do usuário FEITO