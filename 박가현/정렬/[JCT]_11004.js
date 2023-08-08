let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [N, input] = fs.readFileSync(path).toString().trim().split('\n');
input = input.split(' ').map(Number);
N = N.split(' ').map(Number);
input = input.sort((a, b) => {
  return a - b;
});
console.log(input[N[1] - 1]);
