const mongoose = require('mongoose');

const DatosEncargadoSchema = mongoose.Schema({
    Ident: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    profesion:{
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Datos_Encargado', DatosEncargadoSchema);