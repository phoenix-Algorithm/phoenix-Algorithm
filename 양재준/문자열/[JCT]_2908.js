let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let num1 = input[0].split(' ')[0];
let num2 = input[0].split(' ')[1];

let rev_num1 = Number(num1.split('').reverse().join(''));
let rev_num2 = Number(num2.split('').reverse().join(''));

console.log(Math.max(rev_num1,rev_num2));






