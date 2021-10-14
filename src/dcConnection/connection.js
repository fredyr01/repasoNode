const mongoose = require('mongoose');
const password = 'hiumUTplF9Cur6BV';
const dbname = 'pokedex';
const uri = `mongodb+srv://fredy:${password}@cluster0.2bgur.mongodb.net/${dbname}?retryWrites=true&w=majority`;

//* Esto
module.exports = () => mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

//* Es igual a esto
// const connection = () => {
//     mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
// }

// module.exports = connection;