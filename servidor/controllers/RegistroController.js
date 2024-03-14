const Registro = require("../models/RegistroModel")

exports.createRegistro = async (req, res) => {

    try {
        let registro;
        //Create product
        registro = new Registro(req.body);

        await registro.save();
        res.send(registro);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getRegistros = async (req, res) => {

    try {

        const registro = await Registro.find();
        res.json(registro);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.updateRegistro = async (req, res) => {

    try {

        const { Ident,nombre, motivo, referencias, encargado, ubicacion } = req.body;
        let registro = await Registro.findById(req.params.id);

        if(!registro){
            res.status(404).json({msg:'Registro no encontrado, intente con otro Registro'})
        }
        registro.Ident= Ident;
        registro.nombre = nombre;
        registro.motivo = motivo;
        registro.referencias = referencias;
        registro.encargado = encargado;
        registro.ubicacion = ubicacion;

        registro = await Registro.findByIdAndUpdate({_id : req.params.id}, registro, {new:true})
        res.json(registro);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getRegistro = async (req, res) => {

    try {

        let registro = await Registro.findById(req.params.id);

        if(!registro){
            res.status(404).json({msg:'Registro no encontrado, intente con otro Registro'})
        }

        res.json(registro);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteRegistro = async (req, res) => {

    try {

        let registro = await Registro.findById(req.params.id);

        if(!registro){
            res.status(404).json({msg:'Registro no encontrado, intente con otro Registro'})
        }

        await Registro.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Registro eliminado Correctamente"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}