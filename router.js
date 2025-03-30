const express = require('express');
const router = express.Router();

const conexion = require('./database/db'); //trae la conexion para las rutas

const metodos = require('./controllers/me'); //metodo que recupera las funciones del controlador

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Examen


//Empleados
router.get('/Empleado2', (req, res) => {
    conexion.query("select * from empleados", (error, resultado) => {
        if (error) {
            console.log(error);
            return;
        } else {
            res.render('empleado/index', { empleados: resultado });
        }
    });
});

router.get('/crear5', (req, res) => {
    res.render('empleado/crear');
});

router.post('/save5', metodos.save5);



// cooperativa
router.get('/Cooperativa', (req, res) => {
    conexion.query("select * from cooperativa", (error, resultado) => {
        if (error) {
            console.log(error);
            return;
        } else {
            res.render('cooperativa/index', { movimientos: resultado });
        }
    });
});

router.get('/crear6/:id', (req, res) => {
    const codigo = req.params.id;
    res.render('cooperativa/crear', { codigo_empleado: codigo });
});

router.post('/save6', metodos.save6);

//pago

router.get('/Pagos', (req, res) => {
    conexion.query("select * from pagos", (error, resultado) => {
        if (error) {
            console.log(error);
            return;
        } else {
            res.render('pago/index', { pagos: resultado });
        }
    });
});

router.get('/crear7/:id', (req, res) => {
    const codigo = req.params.id;
    res.render('pago/crear', { codigo_empleado: codigo });
});

router.post('/save7', metodos.save7);

router.get('/', (req, res) => {
    res.render('menu');
});








module.exports = router; //para poder enviar las rutas a otro archivo
