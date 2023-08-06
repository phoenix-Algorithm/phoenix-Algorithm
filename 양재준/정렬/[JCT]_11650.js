let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input[i + 1].split(' ').map(Number));
}

function compareFunction(a, b) {
  if (a[0] != b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
}

arr.sort(compareFunction);

let answer = '';

for (let p of arr) {
  answer += p[0] + ' ' + p[1] + '\n';
}

console.log(answer);
