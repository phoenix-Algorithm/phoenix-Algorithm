let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');
// 최댓값과 곱하고 있는 값으로 나눔
input = input.map(Number);
let value = [input[0], input[0]];
for (let i = 1; i < input.length; i++) {
  value[1] = value[1] * input[i];
  value[0] = Math.max(...value);
  if (input[i] > value[0]) value[0] = input[i];
  if (input[i] > value[1]) value[1] = input[i];
}
console.log(value[0].toFixed(3));
