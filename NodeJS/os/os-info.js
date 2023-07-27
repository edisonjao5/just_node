const os = require('node:os');

console.log("Información del sistema operativo: ")
console.log("Plataforma: ", os.platform());
console.log("Versión del sistema operativo: ", os.release());
console.log("Arquitectura del sistema: ", os.arch());
console.log("CPUs: ", os.cpus());
console.log("Memoria libre: ", os.freemem()/1024/1024/1024, "GB");
console.log("Memoria total: ", os.totalmem()/1024/1024/1024, "GB");
console.log("Up time: ", os.uptime()/60/60, "Horas");
