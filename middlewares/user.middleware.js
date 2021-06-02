const { getById } = require("../repositories/user.repository");

exports.errorStatus = (status, message) => {
    return {
        status,
        message
    }
}

exports.validateUser = (req, res, next) => {
    for(let parameter in req.body ) {
        if(!req.body[parameter]) {
            res.status(500).send(this.errorStatus(500, `Parametro ${parameter} é obrigatório`));
        }
    }
    next();
}

exports.validateUserExists = (req, res, next) => {
    const {id} = req.params;
    if(!getById(id)) {
        res.status(500).send(this.errorStatus(500, `Usuario não encontrado`));
    }
    next();
}