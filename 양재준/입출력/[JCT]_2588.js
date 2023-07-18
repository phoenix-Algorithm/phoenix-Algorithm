let fs = require('fs');
let input = fs.readFileSync('양재준/input.txt').toString().split('\n');

let a = Number(input[0].toString());
let b = input[1].toString().split('');


console.log(a * Number(b[2]));
console.log(a * Number(b[1]));
console.log(a * Number(b[0]));
console.log(a * Number(input[1].toString()));