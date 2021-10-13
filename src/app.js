const express = require('express');

//* app contendrá el objeto express con todos sus atributos y metodos
const app = express();

//* Modulo que se encarga de normalizar rutas
const path = require('path');


//? Usar pug
app.set('view engine', 'pug');

//? carpeta views
app.set('views', path.join(__dirname,'views'));

//todo - Routes
const routes = require('./routes/index.routes');
app.use(routes);

//* Static files
//* path.join me une __dirname con '../public'
app.use(express.static(path.join(__dirname,'../public')));
// console.log(__dirname);

app.use((req, res)=>{
    res.sendFile(path.join(__dirname, '../public/404.html'))
});

app.listen(3000, ()=> {
    console.log('Servidor a la espera de conexiones')
});

//* Se separa la funcionalidad en 3 partes
//* App -- que usa las rutas
//* Rutas -- se especifica la ruta
//* Controller -- Funcionalidad cuando un usuario se conecta a esa ruta