// 1-1. 바이러스

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]); // 컴퓨터 수

// 인접 리스트 생성
graph = [];
for (let i = 0; i <= N; i++) {
  graph.push([]);
}
// 인접 리스트 채우기
for (let i = 2; i < 2 + Number(input[1]); i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const visited = Array(N + 1).fill(false);

count = 0;
const dfs = (graph, v, visited) => {
  visited[v] = true;
  count++;
  // v와 연결된 컴퓨터로 바이러스 전파
  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
};

dfs(graph, 1, visited);

// 1번 컴퓨터를 제외한 컴퓨터 개수
console.log(count - 1);
