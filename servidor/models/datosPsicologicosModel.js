const mongoose = require('mongoose');

const DatosPsicologicosSchema = mongoose.Schema({
    Ident: {
        type: String,
        required: true
    },
    comportamientos: {
        type: String,
        required: true
    },
    trastornos: {
        type: String,
        required: true
    },

    createAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Datos_Psicologicos', DatosPsicologicosSchema);