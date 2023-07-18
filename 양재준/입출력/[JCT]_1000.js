let fs = require('fs');
let input = fs.readFileSync('양재준/input.txt').toString().split('\n');


let inputLine = input[0].split(' ');

let a = parseInt(inputLine[0]);
let b = parseInt(inputLine[1]);

console.log(a + b);