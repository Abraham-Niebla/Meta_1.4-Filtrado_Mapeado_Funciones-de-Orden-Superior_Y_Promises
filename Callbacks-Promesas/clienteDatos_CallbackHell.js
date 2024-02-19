//MODIFICADO (Callback Hell)
const servicio = require("./servicioDatos_CallbackHell");

servicio.getDatos(1, 3000, function()
{
    servicio.getDatos(2, 500, function()//Callback 1
    {
        servicio.getDatos(3, 4000, function()//Callback 2
        {
            servicio.getDatos(4, 700, function()//Callback 3
            {
                servicio.getDatos(5, 3500, function()//Callback 4
                {
                    console.log('Programa Terminado');//Callback 5
                })
            })
        })
    })
});