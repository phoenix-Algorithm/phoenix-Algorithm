// 2438 별 찍기 - 1

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let n = Number(input[0]);

let answer = ""

for(let i = 1; i<=n; i++){
    for(let j = 0; j<i; j++){
      answer += "*"
    }
  console.log(answer)
  answer = ""
}

