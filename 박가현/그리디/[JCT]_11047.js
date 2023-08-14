let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [N, ...input] = fs.readFileSync(path).toString().trim().split('\n');
let money = N.trim().split(' ').map(Number)[1];
let answer = 0;
input = input.map(Number);
for (let i = input.length - 1; i >= 0; i--) {
  if (input[i] <= money) {
    // 돈보다는 작지만 가장 가까운 단위
    answer += Math.floor(money / input[i]); // 동전 갯수
    money = money % input[i];
  }
}

console.log(answer);
