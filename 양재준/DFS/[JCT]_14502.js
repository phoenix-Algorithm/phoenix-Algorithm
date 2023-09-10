let [NM, ...data] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [N, M] = NM.split(' ').map(Number);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

data = data.map((el) =>
  el
    .trim()
    .split(' ')
    .map((e) => +e)
);

let max = 0;
let temp = [];
function makeWall(cnt) {
  // 벽이 3개 세워졌을때
  if (cnt == 3) {
    temp = JSON.parse(JSON.stringify(data));

    // 바이러스 전파
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (temp[i][j] == 2) {
          spreadVirus(i, j);
        }
      }
    }

    // 안전지대 계산
    let safetyZone = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (temp[i][j] == 0) safetyZone++;
      }
    }

    // 안전지대 갯수의 최대값
    max = Math.max(max, safetyZone);
    return;
  }

  // 벽세우기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (data[i][j] == 0) {
        data[i][j] = 1;
        makeWall(cnt + 1);
        data[i][j] = 0;
      }
    }
  }
}

function possible(nx, ny) {
  if (nx < 0 || ny < 0 || nx >= N || ny >= M) return false;
  return true;
}
function spreadVirus(x, y) {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (possible(nx, ny) && temp[nx][ny] == 0) {
      temp[nx][ny] = 2;
      spreadVirus(nx, ny);
    }
  }
}

makeWall(0);
console.log(max);
