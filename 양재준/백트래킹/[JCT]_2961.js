const fs = require('fs');
let [N, ...SB] = fs.readFileSync('dev/stdin').toString().split('\n');
N = Number(N);
SB = SB.map((el) => el.split(' ').map(Number));

let result = [];
let visited = Array(N).fill(false);
let answer = 1e9;

function dfs(depth, start) {
  if (depth >= 1) {
    // 1개 이상의 재료를 사용하였을때 결과 계산
    let totalS = 1;
    let totalB = 0;
    for (let i of result) {
      let [s, b] = SB[i];
      totalS *= s;
      totalB += b;
    }
    answer = Math.min(answer, Math.abs(totalS - totalB));
  }

  for (let i = start; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(i);
    dfs(depth + 1, i + 1);
    visited[i] = false;
    result.pop();
  }
}

dfs(0, 0);
console.log(answer);
