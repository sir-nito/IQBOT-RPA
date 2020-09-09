'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ComprobanteLuzSchema = Schema({
    tarifa: {
        type: String
    },
    noDeServicio: {
        type: String
    },
    rmu: {
        type: String
    },
    noMedidor: {
        type: String
    },
    Multiplicador: {
        type: String
    },
    periodoFacturado: {
        type: String
    },
    corteApartir: {
        type: String
    },
    create_at: {
        type: String,
    },
    limiteDePago: {
       type: String
     },
     
     totalAPagar :{
       type: String
     },
     direccionNombre:{
         type:String
     }
     
    
});

module.exports = mongoose.model('ComprobanteLuz', ComprobanteLuzSchema);