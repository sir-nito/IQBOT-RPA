'require'
var CFE = require('../models/comprobanteLuz');
var TELEFONICO = require('../models/comprobanteTelefonico');
//var DOCUMENTOSVARIOS = require('../models/')
var fs = require('fs');
var moment = require('moment');
var nodemailer = require('nodemailer');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
var path = require('path');

function Datos(req, res) {
    var params = req;
    console.log(params.body);
    params.save((err, reciboAlmacenado) => {
        if (err) return res.status(500).send({ message: 'error al guardar' });

        if (!reciboAlmacenado) return res.status(404).send({ message: 'no se ha guardado' });


        return res.status(200).send({ cfe: reciboAlmacenado });
    });

} 
function RegistroIQBOT1(req,res){
     var params = req;
            console.log(params);
    return res.status(200).send({message:'respuesta XD'});

}

function RegistroIQBOT2(req, res) {
    var params = req.body;
    var cfe = new CFE;
    cfe.save((err, reciboAlmacenado) => {
        if (err) return res.status(500).send({ message: 'error al guardar' });

        if (!reciboAlmacenado) return res.status(404).send({ message: 'no se ha guardado' });


        return res.status(200).send({ cfe: reciboAlmacenado });
    });
}
 function consultaLaboratorio1(req,res){

 }
 function consultaLaboratorio2(req,res){

}
module.exports={
    RegistroIQBOT1,
    RegistroIQBOT2,
    consultaLaboratorio2,
    consultaLaboratorio1,
    Datos

    
}