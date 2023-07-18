// 2739 구구단

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let n = Number(input[0]);

for(let i = 1; i<=9; i++){ // Number(input) 했을 때 오답이 나옴
    console.log(`${n} * ${i} = ${n*i}`)
}

