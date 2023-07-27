const fs = require('node:fs');

//Form Sinchronous
// const text = fs.readFileSync('./text.txt', 'utf-8');`
// console.log(text);

//Form Asinchronous
console.log('Start reading a file...');
fs.readFile('./text.txt', 'utf-8', (err, text) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('FT', text);
})
console.log('Make some tea while reading the file...');

fs.readFile('./text2.txt', 'utf-8', (err, text) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('ST', text);
})
