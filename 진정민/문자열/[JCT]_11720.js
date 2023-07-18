// 11720 숫자의 합

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n'); 

let testcase = input[0];
let digit = input[1]
let answer = 0;

for(let i = 0; i<testcase; i++){
  answer += Number(digit[i])
}

console.log(answer)