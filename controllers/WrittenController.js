const WrittenDB = require('../models/WrittenModel').WrittenDB

exports.showWritten = async (req,res) => {

    let x = await WrittenDB.getAllWritten()

    res.json(x)

}

exports.createNewWritten = async (req,res) => {

    let y = {
        idUsuario:'x',
        idCategoria:'5f6faeac279c523a64d04765',
        texto:'La emoción no se mide en besos o palabras, se mide en latidos. Y mi corazón late desenfrenado desde que la conocí. Son dos los latidos que me gritan: “es ella”, por cada tres que me dicen: “esta vez, sí”.',
        titulo:'EL PRIMERO',
        capitulo:'I',
        creado: new Date().toLocaleDateString(),
        actualizado: new Date().toLocaleDateString(),
        comentario:[],
        estatus:true
    }

    let x = await WrittenDB.createNewWritten(y)

    res.send(x)

}