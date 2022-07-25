let fs = require('fs');
let readfile=fs.readFileSync('./output_2.json');
let js = JSON.parse(readfile);
console.log(js)