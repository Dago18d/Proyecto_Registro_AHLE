const express = require('express');
const DBconnection =require('./config/db');
const cors = require('cors');

//Se crea el servidor
const app = express();

//Conectar a DB
DBconnection();
app.use(cors())

//habilitar datos JSON
app.use(express.json());

//Ruta
app.use('/api/products', require('./routes/product'));
app.use('/api/registro', require('./routes/RegistroRouter'));
app.use('/api/datosClinicos', require('./routes/datosClinicosRouter'));
app.use('/api/datosGenerales', require('.//routes/datosGeneralesRouter'));
app.use('/api/exInternos', require('./routes/exInternosRouter'));
app.use('/api/datosEncargado', require('.//routes/datosEncargadoRouter'));
app.use('/api/datosPsi', require('.//routes/datosPsicologicosRouter'));
app.use('/api/datosAcademicos', require('./routes/datosAcademicosRouter'))

app.listen(3000, () => {
    console.log('The server is runnig')
})
