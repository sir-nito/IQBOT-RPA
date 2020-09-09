var express = require('express');
var RpaController = require('../controllers/rpa');
var api = express.Router();
var middleware = require('../middlewares/authenticated');
var multipart = require('connect-multiparty');

api.post('/registroLaboratorio2', RpaController.RegistroIQBOT2);
api.post('/registroLaboratorio1', RpaController.RegistroIQBOT1);
api.get('/consultaLaboratorio2', RpaController.consultaLaboratorio2);
api.get('/consultaLaboratorio1', RpaController.consultaLaboratorio1);
api.post('/Datos', RpaController.Datos);
module.exports = api;   