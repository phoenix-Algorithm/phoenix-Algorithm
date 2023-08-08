const fs = require('fs');
let input = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')[0]
  .split(' ')
  .map((v) => Number(v));

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

console.log(...input);
