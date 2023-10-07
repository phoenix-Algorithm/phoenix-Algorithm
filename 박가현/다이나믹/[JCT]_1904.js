let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
// 내 답
// let n = Number(input[0]);
// let z = 0;
// let answer = 0;
// while (z <= n) {
//   if (z == 0 || z == n) {
//     z += 2;
//     answer++;
//   } else {
//     answer += n - z + 1;
//     z += 2;
//   }
// }
// console.log(answer % 15746);
// 정답 코드
let n = Number(input[0]);
let value = new Array(n + 1).fill(0);
value[1] = 1;
value[2] = 2;
for (let i = 3; i <= n; i++) {
  value[i] = (value[i - 1] + value[i - 2]) % 15746;
}
console.log(value[n]);
