let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let n = Number(input[0]);
function dfs(graph, n, x, y, color, secondColor) {
  if (x <= -1 || x >= n || y <= -1 || y >= n) return false;
  if (graph[x][y] === color || graph[x][y] === secondColor) {
    // 해당 노드 방문 처리
    graph[x][y] = 'Visited';
    // 상, 하, 좌, 우의 위치들도 모두 재귀적으로 호출
    dfs(graph, n, x - 1, y, color, secondColor);
    dfs(graph, n, x, y - 1, color, secondColor);
    dfs(graph, n, x + 1, y, color, secondColor);
    dfs(graph, n, x, y + 1, color, secondColor);
    return true;
  }
  return false;
}
let graph = []; // 그래프 정보
for (let i = 0; i < n; i++) {
  graph[i] = input[i + 1].trim().split('');
}
let all_count = 0;
// let answer = 0; // 연결 요소(connected component)의 수 계산
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let color = graph[i][j];
    if (color === 'Visited') continue;
    if (dfs(graph, n, i, j, color, '')) {
      all_count++;
    } // 현재 위치에서 DFS 수행
  }
}
let count = 0;
for (let i = 0; i < n; i++) {
  graph[i] = input[i + 1].trim().split('');
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let color = graph[i][j];
    let second = '';
    if (color === 'Visited') continue;
    if (color === 'R') second = 'G';
    if (color === 'G') second = 'R';
    if (dfs(graph, n, i, j, color, second)) {
      count++;
    } // 현재 위치에서 DFS 수행
  }
}
// line += k + 1; // 다음 테스트 케이스로 이동
console.log(all_count + ' ' + count);
