const CategoryDB = require('../models/WrittenModel').CategoryDB

exports.showCategory = async (req,res) => {

    let x = await CategoryDB.getAllCategory()

    res.json(x)

}

exports.createNewCategory = async (req,res) => {

    let y = {
        genero:'suspenso',
        color:'#f98',
        background:'#c29e3587',
        creado: new Date().toLocaleDateString(),
        estado:true
    }

    let x = await CategoryDB.createNewCategory(y)

    res.send(x)

}