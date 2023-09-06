let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
//내코드
//let [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');
// let answer = [];
// let index = 0;
// let test = 0;
// while (test < Number(t)) {
//   let count = 0;
//   const [r, c, num] = input[index].split(' ').map(Number);
//   index++;
//   let visited = [...Array(r)].map(() => []);
//   for (let array of visited) {
//     for (let i = 0; i < c; i++) {
//       array.push(false);
//     }
//   }

//   function dfs(x, y, visited, r, c) {
//     // 현재 노드를 방문 처리
//     if (!visited[x][y]) {
//       visited[x][y] = true;
//       count++;
//     }

//     if (x > 0) {
//       visited[x - 1][y] = true;
//     } // 좌
//     if (x < r - 1) {
//       visited[x + 1][y] = true;
//     }
//     if (y > 0) {
//       visited[x][y - 1] = true;
//     }
//     if (y < c - 1) {
//       visited[x][y + 1] = true;
//     }
//     // 나머지 애들도 방문처리
//   }

//   for (let i = 0; i < num; i++) {
//     let [x, y] = input[index].split(' ').map(Number);
//     dfs(x, y, visited, r, c);
//     index++;
//   }
//   answer.push(count);
//   test++;
// }

// console.log(answer.join('\n'));

// 정답코드
function dfs(graph, n, m, x, y) {
  // 깊이 우선 탐색(DFS) 수행
  // 주어진 범위를 벗어나는 경우에는 즉시 종료
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;
  // 현재 노드를 아직 처리하지 않았다면
  if (graph[x][y] == 1) {
    // 해당 노드 방문 처리
    graph[x][y] = -1;
    // 상, 하, 좌, 우의 위치들도 모두 재귀적으로 호출
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    return true;
  }
  return false;
}
let testCases = Number(input[0]); // 테스트 케이스의 수
let line = 1;
while (testCases--) {
  // 가로 길이(M), 세로 길이(N), 배추가 심어져 있는 위치의 개수(K)
  let [m, n, k] = input[line].split(' ').map(Number);
  let graph = []; // 그래프 정보
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
  }
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(' ').map(Number);
    graph[x][y] = 1;
  }
  let answer = 0; // 연결 요소(connected component)의 수 계산
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++; // 현재 위치에서 DFS 수행
    }
  }
  line += k + 1; // 다음 테스트 케이스로 이동
  console.log(answer);
}
