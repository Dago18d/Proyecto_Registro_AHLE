const DatosGenerales = require("../models/datosGeneralesModel")

exports.createDatosGenerales = async (req, res) => {

    try {
        let datosGenerales;
        //Create product
        datosGenerales = new DatosGenerales(req.body);

        await datosGenerales.save();
        res.send(datosGenerales);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getDatosGenerales = async (req, res) => {

    try {

        const datosGenerales = await DatosGenerales.find();
        res.json(datosGenerales);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.updateDatosGenerales = async (req, res) => {

    try {

        const { Ident,nombre, identidad, fechaNacimiento, edad, tallaRopa, tallaZapato, discapacidad, motivoSalida } = req.body;
        let datosGenerales = await DatosGenerales.findById(req.params.id);

        if(!datosGenerales){
            res.status(404).json({msg:'Product not found, try with other product'})
        }
        datosGenerales.Ident= Ident;
        datosGenerales.nombre = nombre;
        datosGenerales.identidad = identidad;
        datosGenerales.fechaNacimiento = fechaNacimiento;
        datosGenerales.edad = edad;
        datosGenerales.tallaRopa= tallaRopa;
        datosGenerales.tallaZapato= tallaZapato;
        datosGenerales.discapacidad= discapacidad;
        datosGenerales.motivoSalida= motivoSalida; 

        datosGenerales = await DatosGenerales.findOneAndUpdate({_id : req.params.id}, datosGenerales, {new:true})
        res.json(datosGenerales);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getDatoGeneral = async (req, res) => {

    try {

        let datosGenerales = await DatosGenerales.findById(req.params.id);

        if(!datosGenerales){
            res.status(404).json({msg:'Product not found, try with other product'})
        }

        res.json(datosGenerales);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteDatosGenerales = async (req, res) => {

    try {

        let datosGenerales = await DatosGenerales.findById(req.params.id);

        if(!datosGenerales){
            res.status(404).json({msg:'Product not found, try with other product'})
        }

        await DatosGenerales.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Product deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}