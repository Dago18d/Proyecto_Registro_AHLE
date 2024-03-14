const DatosAcademicos = require("../models/datosAcademicos")

exports.createDatosAcademicos = async (req, res) => {

    try {
        let datosAcademicos;
        //Create product
        datosAcademicos = new DatosAcademicos(req.body);

        await datosAcademicos.save();
        res.send(datosAcademicos);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getDatosAcademicos = async (req, res) => {

    try {

        const datosAcademicos = await DatosAcademicos.find();
        res.json(datosAcademicos);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.updateDatosAcademicos = async (req, res) => {

    try {

        const { Ident,nivelEducativo, ultimoGradoEscolar, institucionAnterior, areaInteres } = req.body;
        let datosAcademicos = await DatosAcademicos.findById(req.params.id);

        if(!datosAcademicos){
            res.status(404).json({msg:'Product not found, try with other product'})
        }
        datosAcademicos.Ident= Ident;
        datosAcademicos.nivelEducativo = nivelEducativo;
        datosAcademicos.ultimoGradoEscolar = ultimoGradoEscolar;
        datosAcademicos.institucionAnterior = institucionAnterior;
        datosAcademicos.areaInteres = areaInteres;

        datosAcademicos = await DatosAcademicos.findOneAndUpdate({_id : req.params.id}, datosAcademicos, {new:true})
        res.json(datosAcademicos);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getDatoAcademico = async (req, res) => {

    try {

        let datosAcademicos = await DatosAcademicos.findById(req.params.id);

        if(!datosAcademicos){
            res.status(404).json({msg:'Product not found, try with other product'})
        }

        res.json(datosAcademicos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteDatosAcademicos = async (req, res) => {

    try {

        let datosAcademicos = await DatosAcademicos.findById(req.params.id);

        if(!datosAcademicos){
            res.status(404).json({msg:'Product not found, try with other product'})
        }

        await DatosAcademicos.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Product deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}