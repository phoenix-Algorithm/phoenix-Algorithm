const fs = require('fs');
let [data, ...input] = fs.readFileSync('dev/stdin').toString().split('\n');
let [N, K] = data.split(' ').map((el) => Number(el.trim()));
input = input.map((el) => Number(el.trim()));

let count = 0;
for (let i = N - 1; i >= 0; i--) {
  // 제일 큰 수부터 나눠주기
  let Numberinput = input[i];
  count += Math.floor(K / Numberinput);
  // 나눠주고 남은 K값
  K %= Numberinput;
  // K가 0이면 끝
  if (K === 0) break;
}

console.log(count);
