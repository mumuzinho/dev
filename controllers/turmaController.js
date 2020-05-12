const mongoose = require("mongoose");
const requireDir = require("require-dir");
requireDir("../models");
const Turma = mongoose.model("turma");

class turmaController{

    async create(req, res){
        try{
            Turma.create({
            nome: req.body.nome,
            turno: req.body.turno,
            serie: req.body.serie,
            curso: req.body.curso,
            dataInicio: req.body.dataInicio,
            dataFim: req.body.dataFim,
            capacidade: req.body.capacidade
            }).then(data => {
            return res.status(201).json({ data });
            });
        }catch{
            return res.status(400).json({erro:"Falha ao tentar cadastrar turma no banco de dados"});
        }
    };

    async get(req, res){
        try{
            const turmas = await Turma.find();
            return res.status(200).json({ turmas });
        }catch{
            return res.status(400).json({erro:"Falha ao obter turmas"});
        }
    };

    async update(req, res){
        try{
            await Turma.findByIdAndUpdate(req.params.id,
            { 
                $set: req.body
            }
            );
            const turma = await Turma.findById(req.params.id);
            return res.status(200).json({ turma });
        }catch{
            return res.status(400).json({erro:"Falha ao tentar alterar as informações da turma"});
        }
    }

    async delete(req,res){
        try{
            await Turma.findByIdAndDelete(req.params.id);
            return res.status(200).json({msg: "Turma deletada com sucesso"});
        }catch{
            return res.status(400).json({erro:"Falha ao tentar deletar a turma"});
        }
    }
}

module.exports = new turmaController(); 