const { PermitDB } = require("../models/UserModel")

exports.showPermit = async (req,res) => {

    let x = await PermitDB.getAllPermit()

    res.json(x)

}

exports.createNewPermit = async (req,res) => {

    let y = [{
        nombre:'Obtener',
        restriction:1
    },{
        nombre:'Crea',
        restriction:2
    },{
        nombre:'Eliminar',
        restriction:3
    },{
        nombre:'Modificar',
        restriction:4
    }]

    let x = []


    y.forEach(async e => {
        x.push(await PermitDB.createNewPermit(e))        
    });

    res.json(x)

}