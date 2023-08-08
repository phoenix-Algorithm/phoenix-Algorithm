let fs = require('fs');
let [N, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] > input[j]) {
      let temp = '';
      temp = input[i];
      input[i] = input[j];
      input[j] = temp;
    }
  }
}

let answer = '';
for (let i = 0; i < N; i++) {
  answer += input[i] + '\n';
}
console.log(answer);
