// 2-1. 노드사이의 거리

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i <= N + 1; i++) {
  arr.push([]);
}
for (let i = 1; i < N; i++) {
  const [a, b, cost] = input[i].split(' ').map(Number);
  arr[a].push([b, cost]);
  arr[b].push([a, cost]);
}

const dfs = (start, dist) => {
  if (!visited[start]) {
    visited[start] = true;
    distance[start] = dist;
    for (let [next, cost] of arr[start]) {
      dfs(next, dist + cost);
    }
  }
};

for (let m = N; m < N + M; m++) {
  const [start, end] = input[m].split(' ').map(Number);
  visited = new Array(N + 1).fill(false);
  distance = new Array(N + 1).fill(-1);
  dfs(start, 0);
  console.log(distance[end]);
}
