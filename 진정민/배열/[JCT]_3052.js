// 3052 나머지

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n'); 

let arr = input.map(Number)
let answer = []

for(let i = 0; i < 10; i++){ // 범위를 arr.length로 하면 오류남
  answer[i] = arr[i]%42
}

let result = answer.reduce((ac, v) => ac.includes(v) ? ac : [...ac, v], []);


console.log(result.length)