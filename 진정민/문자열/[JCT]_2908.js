// 2908 상수

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n'); 

let data = input[0].split(' ')

let a = ''
let b = ''

for(let i = 2; i >=0; i--){
  a += (data[0])[i];
  b += (data[1])[i];
}

console.log(Number(a) > Number(b) ? a : b)