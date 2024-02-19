//MODIFICADO (Promises async/await)
const servicio = require("./servicioDatos_PromisesAsyncAwait");

const llamadas = [
    { id: 1, tiempo: 3000 },
    { id: 2, tiempo: 500 },
    { id: 3, tiempo: 4000 },
    { id: 4, tiempo: 700 },
    { id: 5, tiempo: 3500 }
];

async function realizarLlamadas() {
    for (const llamada of llamadas) {
        await servicio.getDatos(llamada.id, llamada.tiempo);
    }
}

realizarLlamadas();