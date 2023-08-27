const fs = require('fs');
let [N, ...cost] = fs.readFileSync('dev/stdin').toString().split('\n');
N = Number(N);
cost = cost.map((el) => el.split(' ').map(Number));

let visited = Array(N).fill(false);
visited[0] = true; // 중간에 시작지점으로 돌아오지 않게 visited 처리
let min = 1000000 * 10 + 1;

function dfs(city, depth, currentCost) {
  if (depth === N - 1) {
    if (cost[city][0] !== 0) {
      let totalCost = currentCost + cost[city][0];
      if (totalCost < min) {
        min = totalCost;
      }
    }
    return;
  }

  for (let i = 1; i < N; i++) {
    if (visited[i] || cost[city][i] === 0) continue;
    visited[i] = true;
    dfs(i, depth + 1, currentCost + cost[city][i]);
    visited[i] = false;
  }
}

dfs(0, 0, 0);
console.log(min);
