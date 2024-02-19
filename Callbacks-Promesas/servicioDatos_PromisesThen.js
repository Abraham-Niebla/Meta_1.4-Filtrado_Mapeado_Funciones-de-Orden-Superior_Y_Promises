// MODIFICADO (Promises .then)
const promesa = function(id, duracion) {
    console.log('Proceso', id, 'obteniendo datos de Internet'); // Impresión al iniciar el proceso
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(id);
        }, duracion);
    });
};

function procesa(id, duracion) {
    return promesa(id, duracion)
        .then(function(r) {
            console.log('Transferencia', r, 'terminada');
        })
        .catch(function(error) {
            console.error(error);
        });
}

module.exports.getDatos = function(id, duracion) {
    return procesa(id, duracion);
};