let fs = require('fs');
let [N, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

input.sort((a, b) => a - b);

let answer = '';
for (let i = 0; i < N; i++) {
  answer += input[i] + '\n';
}

console.log(answer);
