setTimeout(() => {
    console.log('Hola mundo');
}, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Edgar',
        id
    }

    if (id === 10) {
        callback(`EL usuario con ${id}, no existe en la BD.`);
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(20, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log('Usuario de BD', usuario);
});