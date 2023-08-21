const fs = require('fs');
let [size, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [K, N] = size.split(' ').map(Number);
input = input.map(Number);

let start = 1;
let end = Math.max(...input);
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;

  // 가져갈 수 있는 랜선의 개수를 계산
  for (let i = 0; i < K; i++) {
    sum += Math.floor(input[i] / mid);
  }

  if (sum >= N) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
