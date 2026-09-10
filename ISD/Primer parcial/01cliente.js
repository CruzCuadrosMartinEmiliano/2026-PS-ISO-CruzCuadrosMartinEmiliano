/*
Vamos a programar un cliente, mediante 
el cual vamos a probar 

que tenemos que conectarnos al servicio de la base de datos "BD"

el problema es como apuntar al backend
*/

const API_URL = "https://proyectobackcecyt9.onrender.com"

async function main() {

    console.log("cliente Peticion Get -> a${API_URL}/api/talleres");
    const inicio = Date.now();
    const respuesta = await fetch('${API_URL}/api/talleres');
    
    // nos da el tiempo de ida y vuelta por medio de la peticion mediante RTT
    const duracionMS = Date.now() - inicio;
    // un estatus de error 500 seria una respuesta valida si el servicico de la BD no esta disponible
    const cuerpo = await respuesta.json();

    console.log ("Clico de peticion respuesta ");
    console.log("Protocolo HTTPS sobre protocolo TCP : ${respuesta.url} ");
    console.log("Status de recibido: ${respuesta.status}${respuesta.statusText}");
    console.log("Tiempo de ida y vuelta (RTT) ${duracionMS} ms");
    console.log(JSON.stringify(cuerpo,null,2));
}
main();
