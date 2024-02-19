//MODIFICADO (Promises async/await)
const promesa = function(id, duracion) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(id);
        }, duracion);
    });
};

async function procesa(id, duracion) {
    try {
        console.log('Proceso', id, 'obteniendo datos de Internet');
        const r = await promesa(id, duracion);
        console.log('Transferencia', r, 'terminada');
    } catch(error) {
        console.error(error);
    }
}

module.exports.getDatos = async function(id, duracion) {
    await procesa(id, duracion);
};
