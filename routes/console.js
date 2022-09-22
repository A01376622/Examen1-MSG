const express = require('express');

//Router verlo como una mini aplicación
const router = express.Router();
const consoleController = require('../controllers/console');


//GET REQUEST - Pagina
router.get('/pagina',consoleController.getPagina);

//POST REQUEST - Validacion
router.post('/validacion',consoleController.postValidacion);

module.exports = router;