// 2588 곱셈

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let a = input[1];

console.log(Number(input[0])*Number(a[2]))
console.log(Number(input[0])*Number(a[1]))
console.log(Number(input[0])*Number(a[0]))
console.log(Number(input[0])*Number(a))