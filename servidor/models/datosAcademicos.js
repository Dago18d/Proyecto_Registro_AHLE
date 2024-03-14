const mongoose = require('mongoose');

const DatosAcademicosSchema = mongoose.Schema({
    Ident: {
        type: String,
        required: true
    },
    nivelEducativo: {
        type: String,
        required: true
    },
    ultimoGradoEscolar: {
        type: String,
        required: true
    },
    institucionAnterior: {
        type: String,
        required: true
    },
    areaInteres: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Datos_Academicos', DatosAcademicosSchema);