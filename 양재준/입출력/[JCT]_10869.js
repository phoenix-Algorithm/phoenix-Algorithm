let fs = require('fs');
let input = fs.readFileSync('양재준/input.txt').toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

