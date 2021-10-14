//* Crea un objeto vacio pero que se añadirán elementos
const controller = {};

const connection = require('../dcConnection/connection');

//* Importando pokemodel
const PokeModel = require('../models/pokemon.model');

controller.index = async (req, res)=>{
    try{
    const title = 'Index desde el servidor con Pug y desde una variable!';
    //* Connection devuelve una promesa
    await connection();
    //console.log('Conexión OK con Nodemon');
    //* funcion para recuperar todos los dato de la conexión -- find() y se guarda en una variable
    const allPokemons = await PokeModel.find();
    console.log(allPokemons);

    // res.send('La conexión ha sido correcta, desde index.controller!')
    //* trabajando con las vistas de la carpeta views
    res.render('index',{title})
    }catch(err){
        console.error();
    }
}

//* Exportar el objeto para usarlo en otros archivos
module.exports = controller;



