const WrittenDB = require('../models/WrittenModel').WrittenDB

exports.showWritten = async (req,res) => {
    console.log(req.query);
    let x = await WrittenDB.getAllWritten()

    res.json(x)

}

exports.createNewWritten = async (req,res) => {

    let y = {
        usuario:'5f706dc29d6f2307d8efd890',
        categoria:'5f6faeac279c523a64d04765',
        genero:'5f72f02bcf9c7b41b49da463',
        texto:'Gypsy Rose creía que había nacido con la capacidad mental de una niña de 7 años y que tenía muchas discapacidades y enfermedades, desde distrofia muscular, leucemia y asma, todo debido a su nacimiento prematuro. Pero la realidad es que no tenía ninguna de esas enfermedades y era su madre la que hacía creer esa mentira.',
        titulo:'EL TERSERO',
        capitulo:'I',
        creado: new Date().toLocaleDateString(),
        actualizado: new Date().toLocaleDateString(),
        comentario:[],
        like:[],
        estatus:true
    }

    let x = await WrittenDB.createNewWritten(y)

    res.send(x)

}