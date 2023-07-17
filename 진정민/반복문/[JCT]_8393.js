// 8393 합

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let answer = 0;

for(let i = 1; i<=Number(input[0]); i++){ // Number(input) 했을 때 오답이 나옴
    answer += i
}

console.log(answer)