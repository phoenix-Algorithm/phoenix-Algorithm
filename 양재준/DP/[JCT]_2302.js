const fs = require('fs');
let [N, M, ...VIP] = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

function getWays(num) {
  if (num == 0) return 1;
  if (num == 1) return 1;
  const fib = [0, 1, 2];
  for (let i = 3; i <= num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib[num];
}

let prevVIP = 0;
let result = 1;
for (let i = 0; i < M; i++) {
  result *= getWays(VIP[i] - prevVIP - 1);
  prevVIP = VIP[i];
}
result *= getWays(N - prevVIP);

console.log(result);
