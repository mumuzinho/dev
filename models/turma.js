const mongoose = require('mongoose'); 

const turmaSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    turno: {type: String, required: true},
    serie: {type: Number, required: true},
    curso: {type: String, required: true},
    dataInicio: {type: Date , required: true},
    dataFim:{type: Date , default: ""},
    capacidade:{type: Number , required: true}
});

mongoose.model("turma",turmaSchema,"turmas");