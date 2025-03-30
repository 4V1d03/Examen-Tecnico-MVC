const conexion = require('../database/db'); //hac el llamado a la bd, para hacer el llamado a conexion

///////////////////////////////////////////////////////////////////////////////////////
//EXAMEN

//EMPLEADO
exports.save5 = (req, res) => {
    const nombre = req.body.nombre;
    const fecha_ingreso = req.body.fecha_ingreso;

    conexion.query(
        'insert INTO empleados SET ?',
        { nombre, fecha_ingreso},
        (error, resultado) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/Empleado2');
            }
        }
    );
};

//cooperativa
exports.save6 = (req, res) => {
    const codigo_empleado = req.body.codigo_empleado;
    const tipo = req.body.tipo; 
    const monto = req.body.monto;
    const fecha = new Date();

    conexion.query(
        'insert into cooperativa SET ?',
        { codigo_empleado, tipo, monto, fecha },
        (error, resultado) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/Cooperativa');
            }
        }
    );
};

//pago
exports.save7 = (req, res) => {
    const codigo_empleado = req.body.codigo_empleado;
    const fecha_pago = req.body.fecha_pago;
    const horas_trabajadas = req.body.horas_trabajadas;
    const valor_hora = req.body.valor_hora;
    
    const salario_bruto = horas_trabajadas * valor_hora;

    let bono_extra = 0;
    let bono_normal = 0;

    const mes_pago = new Date(fecha_pago).getMonth() + 1;
    if (mes_pago === 6 || mes_pago === 12) {
        bono_extra = salario_bruto * 0.80;
    }

    if (salario_bruto < 5000) {
        bono_normal = salario_bruto * 0.25;
    } else if (salario_bruto < 9000) {
        bono_normal = salario_bruto * 0.20;
    }

    const salario_neto = salario_bruto + bono_normal + bono_extra;

    conexion.query(
        'INSERT INTO pagos SET ?',
        { codigo_empleado, fecha_pago, horas_trabajadas, valor_hora, salario_bruto, bono_normal, bono_extra, salario_neto },
        (error, resultado) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/Pagos');
            }
        }
    );
};








