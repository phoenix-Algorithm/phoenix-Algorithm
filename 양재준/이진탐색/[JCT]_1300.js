const fs = require('fs');
let [N, k] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

N = Number(N);
k = Number(k);

let start = 1;
let end = 10 ** 10;

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  // mid 값보다 작거나 같은 데이터의 개수
  let total = 0;
  for (let i = 1; i <= N; i++) {
    total += Math.min(parseInt(mid / i), N);
  }
  // mid 값이 k보다 크거나 같으면 end를 mid - 1로 바꿔서 mid 값을 줄여준다.
  if (total >= k) {
    result = mid;
    end = mid - 1;
  }
  // mid 값이 k보다 작으면 start를 mid + 1로 바꿔서 mid 값을 키워준다.
  else start = mid + 1;
}

console.log(result);
