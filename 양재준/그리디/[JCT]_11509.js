const fs = require('fs');
let [N, input] = fs.readFileSync('dev/stdin').toString().split('\n');

N = Number(N);
input = input.split(' ').map(Number);

// 화살의 높이를 인덱스로 사용한다.
let arrowArr = new Array(N + 1).fill(0);
let count = 0;

for (let i = 0; i < N; i++) {
  // 화살의 높이
  let height = input[i];

  // 해당 높이의 화살이 있으면 해당 화살을 풍선을 터트리고 화살의 높이를 감소시킨다.
  // 해당 높이의 화살이 없으면 화살을 새로 쏘고 화살의 높이를 감소시킨다.
  if (arrowArr[height] > 0) {
    arrowArr[height]--;
    arrowArr[height - 1]++;
  } else {
    count++;
    arrowArr[height - 1]++;
  }
}

console.log(count);
