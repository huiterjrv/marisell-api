const { RolDB } = require("../models/UserModel")

exports.showRol = async (req,res) => {

    let x = await RolDB.getAllRol()

    res.json(x)

}

exports.createNewRol = async (req,res) => {

    let y = {
        nombre:'Vicitante',
        descripcion:'Solo puede ver los escritos no puede hacer mas nada',
        permisos:['5f706cdbdbe316368c8f0fa0'],
        creado:new Date().toLocaleDateString(),
        actualizado:new Date().toLocaleDateString()
    }

    let x = await RolDB.createNewRol(y)

    res.send(x)

}