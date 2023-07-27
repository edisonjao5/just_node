import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./text.txt', 'utf-8'),
    readFile('./text2.txt', 'utf-8')
])
.then(([text, text2]) => {
    console.log('Start reading a file...')
    console.log('FT', text)
    console.log('Make some tea while reading the file...')
    console.log('ST', text2)
})