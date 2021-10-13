//* Crea un objeto vacio pero que se añadirán elementos
const controller = {};
const title = 'INDEX DESDE EL SERVIDOR CON PUG Y DESDE UNA VARIABLE';

controller.index = (req, res)=>{
    // res.send('La conexión ha sido correcta, desde index.controller!')
    //* trabajando con las vistas de la carpeta views
    res.render('index',{title})
}

//* Exportar el objeto para usarlo en otros archivos
module.exports = controller;



