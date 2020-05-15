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

/**
 * @swagger
 * /api/alunos/id:
 *   get:
 *     description: busca aluno específico
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id do aluno
 *         in: path
 *         required: true
 *         type: String
 *     responses:
 *       '200':
 *         description:{alunos}
 */
router.get("/alunos/:id", alunoController.getById);

/**
 * @swagger
* /api/alunos/id:
 *   put:
 *     description: inserir informações do alunos
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id do aluno
 *         description: id
 *         in: path
 *         required: true
 *         type: String
 *     responses:
 *       '200':
 *         description: {alunos}
 */
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

/**
 * @swagger
 * /api/alunos:
 *   post:
 *     description: cadastro de alunos
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: alunos
 *         description: Nome do alunos
 *         in: body
 *         required: true
 *     responses:
 *       '200':
 *         description: {alunos}
 */
router.post("/alunos", alunoController.create);

/**
 * @swagger
 * /api/alunos/id:
 *   delete:
 *     description: Apagar as informações do aluno
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id do aluno
 *         description: id
 *         in: path
 *         required: true
 *         type: String
 *     responses:
 *       '200':
 *         description: {alunos}
 */
router.delete("/alunos/:id", alunoController.delete);

//rotas do crud do turma

/**
 * @swagger
 * /api/turmas:
 *   post:
 *     description: cadastro de turmas
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: turmas
 *         description: Nome das turmas
 *         in: body
 *         required: true
 *     responses:
 *       '200':
 *         description: {turmas}
 */
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

/**
 * @swagger
* /api/turmas/id:
 *   put:
 *    description: Use para alterar as informações das turmas
 *    responses:
 *      '200':
 *          description: {turmas}
*/
router.put("/turmas/:id", turmaController.update);

/**
 * @swagger
 * /api/turmas/id:
 *   delete:
 *     description: Apagar as informações da turma
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id da turma
 *         description: id
 *         in: path
 *         required: true
 *         type: String
 *     responses:
 *       '200':
 *         description: {turmas}
 */
router.delete("/turmas/:id", turmaController.delete);


module.exports = router;

// Desenvolver backend com autenticação e autorização FEITO
// Prover API de login FEITO
// Prover ao menos dois papéis (admin e user) FEITO
// Disponibilizar API para ser exibida via swagger FEITO
// Prover API CRUD para duas informações além do usuário FEITO