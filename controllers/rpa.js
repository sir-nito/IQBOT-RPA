'require'
var CFE = require('../models/comprobanteLuz');
var TELEFONICO = require('../models/comprobanteTelefonico');
var DOCUMENTOSVARIOS = require('../models/datosCualquiera')
var fs = require('fs');
var moment = require('moment');
var nodemailer = require('nodemailer');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
var path = require('path');

function Datos(req, res) {
    var params = req.body;

    console.log(params);
    var varios = new DOCUMENTOSVARIOS();  
    varios.marcador  = params;
    varios.creacion=  moment().unix();
    varios.usuario = params.usuario;     
    varios.save((err, reciboAlmacenado) => {
        if (err) return res.status(500).send({ message: 'error al guardar' });

        if (!reciboAlmacenado) return res.status(404).send({ message: 'no se ha guardado' });


        return res.status(200).send({ varios: reciboAlmacenado });
    });

} 
function consultaLaboratorio2(req, res) {
    var page = 1;
    if (req.params.page) {
        page = req.params.page;
    }
    var itemsPerPage = 6;

    DOCUMENTOSVARIOS.find().sort('created_at').populate('datos').paginate(page, itemsPerPage,
        (err, datos, total) => {
            if (err) return res.status(500).send({ message: 'error en la peticion' });

            if (!datos) return res.status(404).send({ message: 'no hay lugares disponibles' });

            return res.status(200).send({
                total_items: total,
                pages: Math.ceil(total / itemsPerPage),
                page: page,
                items_per_page: itemsPerPage,
                datos
            });
        });

} 
function RegistroIQBOT1(req,res){
     var params = req;
            console.log(params);
    return res.status(200).send({message:'respuesta XD'});

}

function RegistroIQBOT2(req, res) {
    var params = req.body;
    console.log(params)
    var cfe = new CFE();
   
    
    cfe.save((err, reciboAlmacenado) => {
        if (err) return res.status(500).send({ message: 'error al guardar' });

        if (!reciboAlmacenado) return res.status(404).send({ message: 'no se ha guardado' });


        return res.status(200).send({ cfe: reciboAlmacenado });
    });
}
 function consultaLaboratorio1(req,res){

 }
module.exports={
    RegistroIQBOT1,
    RegistroIQBOT2,
    consultaLaboratorio2,
    consultaLaboratorio1,
    Datos

    
}