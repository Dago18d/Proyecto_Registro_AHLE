const DatosClinicos = require("../models/datosClinicosModel")

exports.createdatosClinicos = async (req, res) => {

    try {
        let datosClinicos;
        
        datosClinicos = new DatosClinicos(req.body);

        await datosClinicos.save();
        res.send(datosClinicos);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getDatosClinicos = async (req, res) => {

    try {

        const datosClinicos = await DatosClinicos.find();
        res.json(datosClinicos);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.updateDatosClinicos = async (req, res) => {

    try {

        const { Ident,alergias, padecimiento, medicamentos, contactoEmergencia } = req.body;
        let datosClinicos = await DatosClinicos.findById(req.params.id);

        if(!datosClinicos){
            res.status(404).json({msg:'Product not found, try with other product'})
        }
        datosClinicos.Ident= Ident;
        datosClinicos.alergias = alergias;
        datosClinicos.padecimiento= padecimiento;
        datosClinicos.medicamentos = medicamentos;
        datosClinicos.contactoEmergencia= contactoEmergencia;

        datosClinicos = await DatosClinicos.findOneAndUpdate({_id : req.params.id}, datosClinicos, {new:true})
        res.json(datosClinicos);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getDatoClinico = async (req, res) => {

    try {

        let datosClinicos = await DatosClinicos.findById(req.params.id);

        if(!datosClinicos){
            res.status(404).json({msg:'Datos Clinicos not found, try with other product'})
        }

        res.json(datosClinicos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteDatosClinicos = async (req, res) => {

    try {

        let datosClinicos = await DatosClinicos.findById(req.params.id);

        if(!datosClinicos){
            res.status(404).json({msg:'Datos Clinicos not found, try with other product'})
        }

        await DatosClinicos.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Datos Clinicos deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}