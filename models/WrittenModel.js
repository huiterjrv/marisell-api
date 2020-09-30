const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentary = {
    texto:String,
    voto:Boolean,
    fecha:Date,
    idUsuario:{
        type: String, 
        ref: 'user'
    }
}

const likeSchema = ({
    idUsuario:{
        type: String, 
        ref: 'user'
    },
    voto:Boolean,
    fecha:Date,
    actualizado:Date
})

const writtenSchema = new Schema({
    usuario:{
        type: String, 
        ref: 'user'
    },
    categoria:{
        type: String, 
        ref: 'category'
    },
    genero:{
        type: String, 
        ref: 'kind'
    },
    texto:String,
    titulo:String,
    capitulo:String,
    creado:Date,
    actualizado:Date,
    comentario:[commentary],
    like:[likeSchema],
    estatus:Boolean
})

const categorySchema = new Schema({
    genero:String,
    color:String,
    background:String,
    creado:Date,
    estado:Boolean
})

const kindSchema = new Schema({
    categoria:String,
    creado:Date,
    estado:Boolean
})

//---------------------tools----------------------------

writtenSchema.statics.writtenQuery = async function (query) {

    return ;

}

//-------------CONSULT---------------------

/**
 * get all the writings
 * @param {Object} searchCriteria The one that is given to you by default is set to set everything to you
 * @param {Object} wantedField Se pasa el criterio de busqueda
 * @param {Number} num Query limiter
 */
writtenSchema.statics.getAllWritten= async function (searchCriteria = {}, wantedField = {}, num = '') {

    return await this.find(searchCriteria, wantedField).populate('categoria').populate('usuario').populate('genero').limit(num);

}

categorySchema.statics.getAllCategory= async function (searchCriteria = {}, wantedField = {}, num = '') {

    return await this.find(searchCriteria, wantedField).limit(num);

}

kindSchema.statics.getAllKind= async function (searchCriteria = {}, wantedField = {}, num = '') {

    return await this.find(searchCriteria, wantedField).limit(num);

}

//---------------------------INSERT------------------------

/**
 * creating a new written
 * @param {Object} fields written format object view database
 */
writtenSchema.statics.createNewWritten = async function(fields) {

    let newWritten = new this(fields);
    return newWritten.save().catch(err => console.log('Ha ocurrido un error --> ',err))

}

categorySchema.statics.createNewCategory = async function(fields) {

    let newcategory = new this(fields);
    return newcategory.save().catch(err => console.log('Ha ocurrido un error --> ',err))

}

kindSchema.statics.createNewKind = async function(fields) {

    let newKind = new this(fields);
    return newKind.save().catch(err => console.log('Ha ocurrido un error --> ',err))

}

exports.WrittenDB = mongoose.model('written', writtenSchema, 'written');

exports.CategoryDB = mongoose.model('category', categorySchema, 'category');

exports.KindDB = mongoose.model('kind',kindSchema,'kind')