const { RolDB } = require("../models/UserModel")

exports.showRol = async (req,res) => {

    let x = await RolDB.getAllRol()

    res.json(x)

}

exports.createNewRol = async (req,res) => {

    let y = {
        nombre:'Admin',
        descripcion:'puede hacer todo ',
        permisos:['5f706cdbdbe316368c8f0fa0','5f706cdbdbe316368c8f0fa1','5f706cdbdbe316368c8f0fa2','5f706cdbdbe316368c8f0fa3'],
        creado:new Date().toLocaleDateString(),
        actualizado:new Date().toLocaleDateString()
    }

    let x = await RolDB.createNewRol(y)

    res.send(x)

}