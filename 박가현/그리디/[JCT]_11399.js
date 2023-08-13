let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [N, input] = fs.readFileSync(path).toString().trim().split('\n');
input = input.trim().split(' ').map(Number);
input.sort((a, b) => a - b); // 수가 작을 수록 큰 값을 곱해야하기에 정
let answer = 0;
for (let i = 0; i < input.length; i++) {
  answer += input[i] * (input.length - i);
}
console.log(answer);
