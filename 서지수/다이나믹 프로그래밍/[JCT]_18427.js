// 3-3. 함께 블록 쌓기

// 강의 답안
// 이거 이해가시나요... 강의 설명도 잘 이해가 안가고
// 블로그 글도 잘 없네요ㅜ

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, M, H] = input[0].split(' ').map(Number);

const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(' ').map(Number));
}

let d = new Array(H + 1).fill(0);
d[0] = 1;

// 모든 학생에 대하여 처리
for (let i = 0; i < N; i++) {
  let data = [];
  // 0부터 H까지의 모든 높이에 대하여 처리
  for (j = 0; j <= H; j++) {
    for (let k = 0; k < arr.length; k++) {
      // 각 학생을 확인하여
      // 현재 학생의 블록으로 특정 높이의 탑을 쌓을 수 있는 경우
      if (d[j] != 0 && j + arr[i][k] <= H) {
        data.push([j + arr[i][k], d[j]]);
      }
    }
  }
  // 쌓을 수 있는 높이에 대하여, 경우의 수 증가
  for ([height, value] of data) {
    d[height] = (d[height] + value) % 1007;
  }
}
console.log(d[H]);
