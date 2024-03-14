const DatosEncargado = require("../models/datosEncargadoModel")

exports.createDatosEncargado = async (req, res) => {

    try {
        let datosEncargado;
        //Create product
        datosEncargado = new DatosEncargado(req.body);

        await datosEncargado.save();
        res.send(datosEncargado);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getDatosEncargado = async (req, res) => {

    try {

        const datosEncargado = await DatosEncargado.find();
        res.json(datosEncargado);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.updateDatosEncargado = async (req, res) => {

    try {

        const { Ident,nombre, telefono, edad, correo, profesion } = req.body;
        let datosEncargado = await DatosEncargado.findById(req.params.id);

        if(!datosEncargado){
            res.status(404).json({msg:'Product not found, try with other product'})
        }
        datosEncargado.Ident= Ident;
        datosEncargado.nombre = nombre;
        datosEncargado.telefono = telefono;
        datosEncargado.edad = edad;
        datosEncargado.correo = correo;
        datosEncargado.profesion = profesion;

        datosEncargado = await DatosEncargado.findOneAndUpdate({_id : req.params.id}, datosEncargado, {new:true})
        res.json(datosEncargado);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getDatoEncargado = async (req, res) => {

    try {

        let datosEncargado = await DatosEncargado.findById(req.params.id);

        if(!datosEncargado){
            res.status(404).json({msg:'Product not found, try with other product'})
        }

        res.json(datosEncargado);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteDatosEncargado = async (req, res) => {

    try {

        let datosEncargado = await DatosEncargado.findById(req.params.id);

        if(!datosEncargado){
            res.status(404).json({msg:'Product not found, try with other product'})
        }

        await DatosEncargado.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Product deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}