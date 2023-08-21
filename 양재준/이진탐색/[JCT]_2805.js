const fs = require('fs');
let [size, input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [N, M] = size.split(' ').map(Number);
input = input.split(' ').map(Number);

let start = 0;
let end = Math.max(...input);
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;

  // 가져갈 수 있는 나무의 길이를 계산
  for (let i = 0; i < N; i++) {
    if (input[i] > mid) sum += input[i] - mid;
  }

  if (sum >= M) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
