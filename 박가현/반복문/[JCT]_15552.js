let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);
let answer = '';
for (let t = 1; t <= testCase; t++) {
  let data = input[t].split(' ');
  let a = Number(data[0]);
  let b = Number(data[1]);
  answer += a + b + '\n';
}
console.log(answer);
