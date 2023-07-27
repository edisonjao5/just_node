const { readFile } = require('node:fs/promises');

//this is a IIFE (Immediately Invoked Function Expression)
(async() => {
    console.log('Start reading a file...');
    const text = await readFile('./text.txt', 'utf-8');
    console.log('FT', text);

    console.log('Make some tea while reading the file...');

    const text2 = await readFile('./text2.txt', 'utf-8');
    console.log('ST', text2);
})();