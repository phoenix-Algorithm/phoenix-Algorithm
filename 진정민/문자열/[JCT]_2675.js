// 2675 문자열 반복

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n'); 

let testcase = input[0];

for(let i = 1; i<=testcase; i++){
  let data = input[i].split(' ')
  let str = data[1]
  let answer = ''
  
  for(let j = 0; j<str.length; j++){
    for(let k = 0; k < data[0]; k++){
      answer += str[j]
    }
  }
  console.log(answer)
}

