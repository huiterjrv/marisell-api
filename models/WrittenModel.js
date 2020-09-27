const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentary = {
    texto:String,
    voto:Boolean,
    fecha:Date,
    idUsuario:String
}

const writtenSchema = new Schema({
    idUsuario:String,
    idCategoria:{
        type: String, 
        ref: 'category'
    },
    texto:String,
    titulo:String,
    capitulo:String,
    creado:Date,
    actualizado:Date,
    comentario:[commentary],
    estatus:Boolean
})

const categorySchema = new Schema({
    genero:String,
    color:String,
    background:String,
    creado:Date,
    estado:Boolean
})

//-------------CONSULT---------------------

/**
 * get all the writings
 * @param {Object} searchCriteria The one that is given to you by default is set to set everything to you
 * @param {Object} wantedField Se pasa el criterio de busqueda
 * @param {Number} num Query limiter
 */
writtenSchema.statics.getAllWritten= async function (searchCriteria = {}, wantedField = {}, num = '') {

    return await this.find(searchCriteria, wantedField).populate('idCategoria').limit(num);

}

/**
 * get all the categories
 * @param {Object} searchCriteria The one that is given to you by default is set to set everything to you
 * @param {Object} wantedField Se pasa el criterio de busqueda
 * @param {Number} num Query limiter
 */
categorySchema.statics.getAllCategory= async function (searchCriteria = {}, wantedField = {}, num = '') {

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

/**
 * creating a new category
 * @param {Object} fields category format object view database
 */
categorySchema.statics.createNewCategory = async function(fields) {

    let newcategory = new this(fields);
    return newcategory.save().catch(err => console.log('Ha ocurrido un error --> ',err))

}

exports.WrittenDB = mongoose.model('written', writtenSchema, 'written');

exports.CategoryDB = mongoose.model('category', categorySchema, 'category');