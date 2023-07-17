let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let answer = Number(input[0]) + Number(input[1]);
console.log(answer);
