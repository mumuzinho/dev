//middleware autorizador
const jwt = require("jsonwebtoken");
const util = require("util");
const authConfig = require("../configs/authConfig");

module.exports = async(req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({ erro: "Token não informado" });
    }else{
        const [, token] = authHeader.split(" ");

        try{
            //Valida se o token é valido 
            // JsonWebToken é dividido em três partes algo que possuo + identificador do token + tempo de expiração do token
            const decoded = await util.promisify(jwt.verify)(token, authConfig.secret);
            console.log(decoded);
            return next();
        }catch(err){
            return res.status(401).json({ erro: "Token inválido"});
        }
    }
};