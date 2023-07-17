// 15552 빠른 A + B

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n'); 
let answer =""

for(let i = 1; i<=Number(input[0]); i++){
  [a,b] = [...(input[i].split(" "))]
  answer += Number(a)+Number(b) + "\n"
}

console.log(answer)