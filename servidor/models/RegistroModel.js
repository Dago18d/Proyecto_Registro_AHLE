const mongoose = require('mongoose');

const RegistroSchema = mongoose.Schema({
    Ident: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    motivo: {
        type: String,
        required: true
    },
    referencias: {
        type: String,
        required: true
    },
    encargado:{
        type: String,
        required: true
    },
    ubicacion:{
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Registro', RegistroSchema);