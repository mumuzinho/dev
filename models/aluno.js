const mongoose = require('mongoose'); 

const alunoSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    cpf: {type: String, required: true},
    ra: {type: Number, default: ""},
    curso: {type: String, required: true},
    periodo: {type: String , required: true},
    email:{type: String , required: true},
    senha:{type: String , required: true}
});

mongoose.model("aluno",alunoSchema,"alunos");
