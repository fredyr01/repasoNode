const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');

//* '/' se refiere a localhost:3000 y se pasa una función flecha donde al
//*  response con la función send se envia un mensaje al cargar la página
//* No hay problema por las tildes, ya tiene utf-8

router.get('/', controller.index );

//* Todo lo que esté en router se exporte y se pueda
//* usar en otros archivos
module.exports = router;