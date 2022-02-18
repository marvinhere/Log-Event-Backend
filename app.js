const express = require('express');
const routes = require('./routes/routes')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',routes);

app.listen(8001,()=>{
    console.log("Servidor Encendido en el puerto",'8001')
})