const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre:String,
    correo:String,
    contraseña:String,
    pais:String,
    creado:Date,
    rol:{
        type: String, 
        ref: 'rol'
    }
})

const rolSchema = new Schema({
    nombre:String,
    descripcion:String,
    permisos:[{
        type: String, 
        ref: 'permit'
    }],
    creado:Date,
    actualizado:Date
})

const permitSchema = new Schema({
    nombre:String,
    restriction:Number
})

//-------------CONSULT---------------------

/**
 * get all the user
 * @param {Object} searchCriteria The one that is given to you by default is set to set everything to you
 * @param {Object} wantedField Se pasa el criterio de busqueda
 * @param {Number} num Query limiter
 */
userSchema.statics.getAllUser= async function (searchCriteria = {}, wantedField = {}, num = '') {

    return await this.find(searchCriteria, wantedField).populate('rol').populate('rol.permisos').limit(num);

}

rolSchema.statics.getAllRol= async function (searchCriteria = {}, wantedField = {}, num = '') {

    return await this.find(searchCriteria, wantedField).populate('permisos').limit(num);

}

permitSchema.statics.getAllPermit= async function (searchCriteria = {}, wantedField = {}, num = '') {

    return await this.find(searchCriteria, wantedField).limit(num);

}

//---------------------------INSERT------------------------

/**
 * creating a new user
 * @param {Object} fields user format object view database
 */
userSchema.statics.createNewUser = async function(fields) {

    let newUser = new this(fields);
    return newUser.save().catch(err => console.log('Ha ocurrido un error --> ',err))

}

rolSchema.statics.createNewRol = async function(fields) {

    let newRol = new this(fields);
    return newRol.save().catch(err => console.log('Ha ocurrido un error --> ',err))

}

permitSchema.statics.createNewPermit = async function(fields) {

    let newPermit = new this(fields);
    return newPermit.save().catch(err => console.log('Ha ocurrido un error --> ',err))

}

exports.UserDB = mongoose.model('user', userSchema, 'user');

exports.RolDB = mongoose.model('rol', rolSchema, 'rol');

exports.PermitDB = mongoose.model('permit', permitSchema, 'permit');