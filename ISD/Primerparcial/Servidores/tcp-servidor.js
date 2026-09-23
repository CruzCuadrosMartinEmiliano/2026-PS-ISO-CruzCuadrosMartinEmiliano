
const net = require('net');

const PUERTO = process.env.PUERTO || 5000;

const servidor = net.createServer((socket)=> {
    const cliente =`${socket.remoteAddress}:${socket.remotePort}`// con esto optienes la direccion ip del cliente
    // aqui el momento de conexion solo se dispara en el momento en que el cliente y el servidor establecen three-ay a traves del handshake(el aprenton de manos es el moento en que el cliente realiza una peticion, envia IP,puerto Datagrama y saluda al servidor, el servidor le responde creando la sesión)
    console.log(`[TCP] coneccion establecida con el cliente ${cliente}`);

    socket.on('data', (datos)=>{
        const crudo = datos.toString();
        //TCP es un flujo de byrtes entonces nosotros en el socket le vamosa a transformar en cadenas

        console.log(`${datos.length} bytes: ${JSON.stringify(crudo)}`);
        //trim sirve para eliminar espacios en blanco el split sirve para el acomodo de datos 
        const lineas = crudo.split('\n').map((l)=> l.trim()).filter(Boolean);
        //sirve para cadenas
        lineas.forEach((linea) =>{console.log(`[TCP] Mensaje: "${linea}"`);
    })
    socket.on('error
    })
});// te deja compartir recursos
