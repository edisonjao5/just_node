//exists a way where we can transform the callback functions into promises
//we can use the promisify function from the util module
//this function takes a function as an argument and returns a promise
// `const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);`

const fs = require('node:fs/promises');

console.log('Start reading a file...');
fs.readFile('./text.txt', 'utf-8')
    .then(text => {
        console.log('FT', text);
    })
    .catch(err => {
        console.log(err);
    })

console.log('Make some tea while reading the file...');

fs.readFile('./text2.txt', 'utf-8')
    .then(text => {
        console.log('ST', text);
    })
    .catch(err => {
        console.log(err);
    })