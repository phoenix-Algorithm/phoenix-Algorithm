let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let count = 0;
function dfs(graph, n, x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= n) return false;
  if (graph[x][y] == 1) {
    // 해당 노드 방문 처리
    graph[x][y] = -1;
    // 상, 하, 좌, 우의 위치들도 모두 재귀적으로 호출
    dfs(graph, n, x - 1, y);
    dfs(graph, n, x, y - 1);
    dfs(graph, n, x + 1, y);
    dfs(graph, n, x, y + 1);
    count++;
    return true;
  }
  return false;
}
let answer = [];
let n = input[0].split(' ').map(Number);
let graph = []; // 그래프 정보
for (let i = 0; i < n; i++) {
  graph[i] = input[i + 1].split('').map(Number);
}

let all_count = 0;
// let answer = 0; // 연결 요소(connected component)의 수 계산
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(graph, n, i, j)) {
      all_count++;
      answer.push(count);
      count = 0;
    } // 현재 위치에서 DFS 수행
  }
}
console.log(all_count);
console.log(answer.sort((a, b) => a - b).join('\n'));
