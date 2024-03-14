const mongoose = require('mongoose');

    const DatosGeneralesSchema = mongoose.Schema({
        Ident: {
            type: String,
            required: true
        },
        nombre: {
            type: String,
            required: true
        },
        identidad: {
            type: String,
            required: true
        },
        fechaNacimiento: {
            type: String,
            required: true
        },
        edad: {
            type: String,
            required: true
        },
        tallaRopa: {
            type: String,
            required: true
        },
        tallaZapato: {
            type: String,
            required: true
        },
        discapacidad: {
            type: String,
            required: true
        },
        motivoSalida:{
            type: String,
            
        },

        createAt: {
            type: Date,
            default: Date.now()
        }
    });
    
    module.exports = mongoose.model('Datos_Generales', DatosGeneralesSchema);