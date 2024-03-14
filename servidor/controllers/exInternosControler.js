const ExInternos = require("../models/exInternosModel")

exports.createExInternos = async (req, res) => {

    try {
        let exInternos;
        //Create product
        exInternos = new ExInternos(req.body);

        await exInternos.save();
        res.send(exInternos);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getExInternos = async (req, res) => {

    try {

        const exInternos = await ExInternos.find();
        res.json(exInternos);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.updateExInternos = async (req, res) => {

    try {

        const { Ident,nombre, identidad, fechaNacimiento, edad, tallaRopa, tallaZapato, discapacidad, motivoSalida } = req.body;
        let exInternos = await ExInternos.findById(req.params.id);

        if(!exInternos){
            res.status(404).json({msg:'Product not found, try with other product'})
        }
        exInternos.Ident= Ident;
        exInternos.nombre = nombre;
        exInternos.identidad = identidad;
        exInternos.fechaNacimiento = fechaNacimiento;
        exInternos.edad = edad;
        exInternos.tallaRopa= tallaRopa;
        exInternos.tallaZapato= tallaZapato;
        exInternos.discapacidad= discapacidad;
        exInternos.motivoSalida= motivoSalida;
        

        exInternos = await ExInternos.findOneAndUpdate({_id : req.params.id}, exInternos, {new:true})
        res.json(exInternos);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getExInterno = async (req, res) => {

    try {

        let exInternos = await ExInternos.findById(req.params.id);

        if(!exInternos){
            res.status(404).json({msg:'Product not found, try with other product'})
        }

        res.json(exInternos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteExInternos = async (req, res) => {

    try {

        let exInternos = await ExInternos.findById(req.params.id);

        if(!exInternos){
            res.status(404).json({msg:'Product not found, try with other product'})
        }

        await ExInternos.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Product deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}