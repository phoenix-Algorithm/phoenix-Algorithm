const fs = require('fs');
let [T, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

T = Number(T);

for (let i = 0; i < T; i++) {
  let [M, N, K] = input.shift().split(' ').map(Number);
  let arr = input.splice(0, K).map((el) => el.split(' ').map(Number));

  let map = Array.from(Array(N), () => Array(M).fill(0));
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];

  for (let j = 0; j < K; j++) {
    const [y, x] = arr[j];
    map[x][y] = 1;
  }

  function dfs(x, y) {
    map[x][y] = 0;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }

  let cnt = 0;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (map[x][y] === 1) {
        dfs(x, y);
        cnt++;
      }
    }
  }

  console.log(cnt);
}
