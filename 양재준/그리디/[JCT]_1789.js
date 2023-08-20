let S = Number(require('fs').readFileSync('dev/stdin').toString().trim());

let count = 0;
let sum = 0;

// 1부터 1씩 증가시키면서 S보다 커지기 직전까지 반복한다.
// 반복문이 종료되면 sum은 S보다 크거나 같다.
while (sum < S) {
  count++;
  sum += count;
}

if (sum === S) {
  console.log(count);
} else {
  console.log(count - 1);
}
