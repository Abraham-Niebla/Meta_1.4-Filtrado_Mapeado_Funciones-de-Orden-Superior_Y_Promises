//MODIFICADO (Callback Hell)
const finDeTransmisionDeDatos = function(id, callback)
{
	console.log('Transferencia', id,  'terminada');
	callback();
}

let obtenDatosDeInternet = function(id, duracion, callback)
{
	console.log('proceso', id, 'obteniendo datos de Internet');
	setTimeout(finDeTransmisionDeDatos, duracion, id, callback);
}
module.exports.getDatos = obtenDatosDeInternet;
