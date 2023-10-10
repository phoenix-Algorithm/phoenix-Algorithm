// 5-2. RGB 거리

// 강의 코드 참고했습니다.

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]); // 집의 개수

arr = [];
d = [];
for (let i = 0; i < N; i++) {
  let [r, g, b] = input[i + 1].split(' ').map(Number);
  // 가능한 최댓값으로 초기화
  d.push(new Array(3).fill(1000000));
  arr.push([r, g, b]);
}

// 첫 번째 집은 그대로 최솟값으로 기록
d[0][0] = arr[0][0];
d[0][1] = arr[0][1];
d[0][2] = arr[0][2];

// 요구사힝: 인접한 집이 동일한 색을 안 쓸 때, 색칠하는 모든 경우의 수 계산
for (let i = 1; i < N; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      if (j != k) d[i][j] = Math.min(d[i][j], arr[i][j] + d[i - 1][k]);
    }
  }
}
console.log(Math.min(d[N - 1][0], d[N - 1][1], d[N - 1][2]));
