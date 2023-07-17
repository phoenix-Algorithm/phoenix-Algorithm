let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let data = input[1].split(' ').map(Number);

let max = data.reduce((a, b) => Math.max(a, b));
let min = data.reduce((a, b) => Math.min(a, b));
let str = `${min} ${max}`;
console.log(str);
