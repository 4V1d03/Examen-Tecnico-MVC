const mysql = require('mysql'); //modulo de sql

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'toor',
    database:'crecer',
    port: 3307
});

conexion.connect((error)=>{

    if (error) {
        console.error('Hay problemas con la conexion' + error);
        return;
    }
    console.log('Conexion exitosa');
});

module.exports = conexion;