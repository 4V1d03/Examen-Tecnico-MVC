//Este archivo es como el main del proyecto

const express = require('express');// solicitud al servicio de express
const app = express(); //incialisa al modulo de express

app.set('view engine', 'ejs'); //motor de plantillas 

app.use(express.urlencoded({extended:false}));
app.use(express(express.json));

app.use('/',require('./router'));//para usar las rutas del archivo routers

//Ejecucion del Servidor
app.listen(5000, ()=>{
    console.log("Servidor local http://localhost:5000");
});
