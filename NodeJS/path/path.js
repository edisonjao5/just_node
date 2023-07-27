const path = require('node:path');

// barra separadora según el sistema operativo
console.log(path.sep);

// crear una ruta
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// obtener el nombre del archivo
const base = path.basename(filePath);
console.log(base);

// obtener la ruta absoluta
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);

// ver la extensión del archivo
const ext = path.extname(absolute);
console.log(ext);