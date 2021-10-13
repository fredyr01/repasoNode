//* ---- CREACIÓN SERVIDOR
//* -- llamando al modulo http de node

const http = require('http');

//* -- Servidor requiere 2 parametros REQUEST req y RESPONSE res
const server = http.createServer((req, res)=>{
    //* Cliente = navegador
    console.log('Un cliente se ha conectado');

    //* Corregir tildes - utf8
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    res.write('La conexión ha sido correcta');

    //*Enviar algo al navegador luego de ejecutar el server.listen
    res.end('');
});

//* Listes recibe dos parametros, puerto y una función que se va a ejecutar cuando el servidor esté listo
server.listen(3000, ()=>{
    console.log('Servidor a la espera de conexiones')
});