let mapaCurricular =  [
    {clave: 36309, nombre: "Desarrollo de Aplicaciones Web"},
    {clave: 36288, nombre: "Algoritmos y Estructuras de Datos"},
    {clave: 34948, nombre: "Cálculo Multivariable"},
    {clave: 36296, nombre: "Sistemas Embebidos"},
    {clave: 36301, nombre: "Internet de las Cosas"},
    {clave: 36295, nombre: "Automatización"},
    {clave: 36299, nombre: "Sistemas Operativos"},
    {clave: 36293, nombre: "Inteligencia Artificial"},
    {clave: 36284, nombre: "Sistemas de Control"},
    {clave: 36303, nombre: "Taller de Sistema Operativo Unix"}
];

const asignatura =
{
    clave: 0, //Entero
    nombre: 0,  //String
    creditos: 0, //Entero
    calificación: 0, //Flotante
    fecha: 0 //Date()
}

//Esta función genera una fecha aleatoria dentro de un rango de fechas
function randomDate(desdeY, desdeM, desdeD, hastaY, hastaM, hastaD)
{
    let desde = new Date(desdeY, desdeM, desdeD);
    let hasta = new Date(hastaY, hastaM, hastaD);
    return new Date(
        desde.getTime() +
        Math.random() * (hasta.getTime() - desde.getTime())
    );
}

let n = process.argv[2];

let asignaturas = []
let aux;

for(let i = 0; i < n; i++)
{
    asignaturas[i] = structuredClone(asignatura);
    aux = Math.round(Math. random()*9);
    asignaturas[i].clave = mapaCurricular[aux].clave;
    asignaturas[i].nombre = mapaCurricular[aux].nombre;
    asignaturas[i].creditos = Math.round(Math. random()*4) + 4;
    asignaturas[i].calificación = Math.round(Math. random()*100, 2);
    asignaturas[i].fecha = randomDate(2021, 1, 1, 2023, 6, 30);
}

let auxDate = new Date();
auxDate.setMonth(auxDate.getMonth() - 6);

console.log("Todas las asignaturas:");
asignaturas.forEach(asig => console.log(asig));

asignaturas = asignaturas.filter(((asig) => asig.calificación < 60));
asignaturas = asignaturas.filter(((asig) => asig.fecha.getTime() < auxDate.getTime()));

asignaturas = asignaturas.map(function(asig)
{
    let cadAux = asig.fecha.getDate().toString() + "/" + (asig.fecha.getMonth()+1).toString() + "/" + asig.fecha.getFullYear().toString();
    asig.fecha = cadAux;
    return asig;
})

console.log("");
console.log("");
console.log("Todas las asignaturas con criterios:");
asignaturas.forEach(asig => console.log(asig));