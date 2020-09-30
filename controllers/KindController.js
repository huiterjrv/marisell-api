const KindDB = require('../models/WrittenModel').KindDB

exports.showKind = async (req,res) => {

    let x = await KindDB.getAllKind()

    res.json(x)

}

exports.createNewKind = async (req,res) => {

    let y = [{
        categoria:'Relatos',
        creado: new Date().toLocaleDateString(),
        estado: true
    },{
        categoria:'Versos',
        creado: new Date().toLocaleDateString(),
        estado: true
    },{
        categoria:'Pensamientos',
        creado: new Date().toLocaleDateString(),
        estado: true
    },{
        categoria:'Poemas',
        creado: new Date().toLocaleDateString(),
        estado: true
    }]

    let x = []

    y.forEach(async e => {
        x.push(await KindDB.createNewKind(e))        
    });

    res.send(x)

}