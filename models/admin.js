const mongoose = require('mongoose'); 

const adminSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true }
});

mongoose.model("admin",adminSchema,"administradores");