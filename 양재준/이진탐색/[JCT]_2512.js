const fs = require('fs');
let [N, budget, total] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

N = Number(N);
budget = budget.split(' ').map(Number);
total = Number(total);

let start = 0;
let end = Math.max(...budget);
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;

  // 상한액을 기준으로 예산을 계산
  for (let i = 0; i < N; i++) {
    if (budget[i] > mid) sum += mid;
    else sum += budget[i];
  }

  // 상한액을 기준으로 계산한 예산이 총 예산보다 작거나 같으면 상한액을 늘려서 다시 계산
  if (sum <= total) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
