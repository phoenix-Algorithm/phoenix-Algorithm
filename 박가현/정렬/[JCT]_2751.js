let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [N, ...input] = fs.readFileSync(path).toString().trim().split('\n');
input = input.map(Number);
input = input.sort((a, b) => {
  return a - b;
});
let answer = input.join('\n');
console.log(answer);
