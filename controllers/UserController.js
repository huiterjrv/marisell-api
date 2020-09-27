const { UserDB } = require('../models/UserModel')

exports.showUser = async (req,res) =>{

    let x = await UserDB.getAllUser()

    res.json(x)

}

exports.createNewUser = async (req,res) => {

    let y = {
        nombre:'Duraznu',
        correo:'hhhh@ggg.ss',
        contraseña:'nolase',
        pais:'Durazno',
        creado:new Date().toLocaleDateString(),
        rol: '5f706cdbdbe316368c8f0fa0'
    }

    let x = await UserDB.createNewUser(y)

    res.send(x)

}