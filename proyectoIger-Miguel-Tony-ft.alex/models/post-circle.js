const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Defining collection and schema for a circle-post
let Post = new Schema({
    departamento:{
        type: String
    },
    municipio:{
        type: String
    },
    circulo:{
        type: String
    },
    direccion:{
      type: String
    },
    coordinador:{
        type: String
    },
    encargado:{
        type: String
    },
    orientador:{
        type: Array
    }},{
        collection: 'circulos'
});

module.exports = mongoose.model('Post', Post)
