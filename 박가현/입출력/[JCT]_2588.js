let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let num = Number(input[0]);
let num2 = input[1];
let a = num * Number(num2.charAt(0));
let b = num * Number(num2.charAt(1));
let c = num * Number(num2.charAt(2));
let answer = a * 100 + b * 10 + c;
console.log(c);
console.log(b);
console.log(a);
console.log(answer);
