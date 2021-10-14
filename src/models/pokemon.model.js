const mongoose = require('mongoose');
const {Schema} = mongoose;

const PokeSchema = new Schema({
    //*Los datos que maneja la tabla
    name: String
})

const PokeModel = mongoose.model('pokemons', PokeSchema);

module.exports = PokeModel;

