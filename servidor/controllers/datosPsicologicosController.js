const DatosPsi = require("../models/datosPsicologicosModel")

exports.createDatosPsi = async (req, res) => {

    try {
        let datosPsi;
        //Create product
        datosPsi = new DatosPsi(req.body);

        await datosPsi.save();
        res.send(datosPsi);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getDatosPsi = async (req, res) => {

    try {

        const datosPsi = await DatosPsi.find();
        res.json(datosPsi);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.updateDatosPsi = async (req, res) => {

    try {

        const { Ident,comportamientos, trastornos} = req.body;
        let datosPsi = await DatosPsi.findById(req.params.id);

        if(!datosPsi){
            res.status(404).json({msg:'Product not found, try with other product'})
        }
        datosPsi.Ident= Ident;
        datosPsi.comportamientos =comportamientos;
        datosPsi.trastornos = trastornos;

        datosPsi = await DatosPsi.findOneAndUpdate({_id : req.params.id}, datosPsi, {new:true})
        res.json(datosPsi);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getDatoPsi = async (req, res) => {

    try {

        let datosPsi = await DatosPsi.findById(req.params.id);

        if(!datosPsi){
            res.status(404).json({msg:'Product not found, try with other product'})
        }

        res.json(datosPsi);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteDatosPsi = async (req, res) => {

    try {

        let datosPsi = await DatosPsi.findById(req.params.id);

        if(!datosPsi){
            res.status(404).json({msg:'Product not found, try with other product'})
        }

        await DatosPsi.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Product deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}