let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let num = Number(input[0]);
let n = Number(input[1]);
function dfs(graph, v, visited) {
  // 현재 노드를 방문 처리
  visited[v] = true;
  count++;
  for (i of graph[v]) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(graph, i, visited);
    }
  }
}
let graph = [...Array(num + 1)].map(() => []);
for (let i = 2; i < input.length; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
visited = Array(num + 1).fill(false);
// 정의된 DFS 함수 호출
let count = 0;
dfs(graph, 1, visited);
console.log(count - 1);
