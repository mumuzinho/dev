const mongoose = require("mongoose");
const requireDir = require("require-dir");
requireDir("../models");
const Aluno = mongoose.model("aluno");

class alunoController {
    //Login do aluno
    async login(req, res){
        const aluno = await Aluno.findOne({
            email: req.body.email
        }); 
        
        if(!aluno){
            return res.status(400).json({erro:"Aluno não encontrado"});
        }else{
            if(req.body.senha != aluno.senha){
                return res.status(400).json({erro:"Senha incorreta"});
            }else{
                return res.status(200).json({msg:"Autorizado !", aluno:aluno});
            }
        }
    };

    async get(req, res){
        try{
            const alunos = await Aluno.find();
            return res.status(200).json({ alunos });
        }catch{
            return res.status(400).json({erro:"Falha ao obter alunos"});
        }

    };

    async getById(req, res){
        try{
            const aluno = await Aluno.findById(req.params.id);
            return res.status(200).json({ aluno });
        }catch{
            return res.status(400).json({erro:"Falha ao obter aluno"});
        }
    };

    async create(req, res){
        try{
            Aluno.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            ra: req.body.ra,
            curso: req.body.curso,
            periodo: req.body.periodo,
            email: req.body.email,
            senha: req.body.senha
            }).then(data => {
            return res.status(201).json({ data });
            });
        }catch{
            return res.status(400).json({erro:"Falha ao tentar cadastrar o aluno no banco de dados"});
        }
    };

    async update(req, res){
        try{
            await Aluno.findByIdAndUpdate(req.params.id,
            { 
                $set: req.body
            }
            );
            const aluno = await Aluno.findById(req.params.id);
            return res.status(200).json({ aluno });
        }catch{
            return res.status(400).json({erro:"Falha ao tentar alterar as informações do aluno"});
        }
    }

    async delete(req,res){
        try{
            await Aluno.findByIdAndDelete(req.params.id);
            return res.status(200).json({msg: "Aluno deletado com sucesso"});
        }catch{
            return res.status(400).json({erro:"Falha ao tentar excluir o aluno"});
        }
    }
}

module.exports = new alunoController(); 