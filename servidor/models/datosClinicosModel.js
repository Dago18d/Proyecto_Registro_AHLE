const mongoose = require('mongoose');

const datosClinicosSchema = mongoose.Schema({
    Ident: {
        type: String,
        required: true
    },
    alergias: {
        type: String,
        required: true
    },
    padecimiento: {
        type: String,
        required: true
    },
    medicamentos: {
        type: String,
        required: true
    },
    contactoEmergencia: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('datosClinicos', datosClinicosSchema);