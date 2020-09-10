'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DatoSchema = Schema({
    marcador: {
        type: Array
    },
    usuario: {       
        type: String
    },
    creacion:{
        type: String
    }
});



module.exports = mongoose.model('Dato', DatoSchema);