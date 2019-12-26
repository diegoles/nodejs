let empleados = [{
        id: 1,
        nombre: 'Edgar'
    },
    {
        id: 2,
        nombre: 'David'
    },
    {
        id: 3,
        nombre: 'Luis'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id, callBack) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callBack(`No existe un empleado con el ID ${id}`);
    } else {
        callBack(null, empleadoDB);
    }
}


let getSalario = (empleado, callback2) => {
    let salarioEmpleadoDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioEmpleadoDB) {
        callback2(`No se encontró un salario para el usuario ${empleado.nombre}`);
    } else {
        callback2(null, {
            nombre: empleado.nombre,
            salario: salarioEmpleadoDB.salario,
            id: empleado.id
        });
    }
};

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    console.log(empleado);

    getSalario(empleado, (err1, resp) => {
        if (err1) {
            return console.log(err);
        }

        console.log(resp);
    });

});