const mongoose = require("mongoose");
const auth = require("../configs/authConfig");

const requireDir = require("require-dir");
requireDir("../models");
const Admin = mongoose.model("admin");

const jwt = require("jsonwebtoken");

class authController{
    async authentication(req, res){
        const admin = await Admin.findOne({
            email: req.body.email
        }); 
        
        if(!admin){
            return res.status(400).json({erro:"Administrador não encontrado"});
        }else{
            if(req.body.senha != admin.senha){
                return res.status(400).json({erro:"Senha incorreta"});
            }else{
                const projeto = "ProjetoCrud";
                
                return res.status(201).json({
                    msg: "Autorizado", token: jwt.sign(
                        { projeto }, 
                        auth.secret, 
                        {expiresIn: auth.expiresIn}
                    )
                });
            }
        }
    
    }
}

module.exports = new authController(); 