// 진짜 목요일 하루 종일 붙잡고 있었는데 결국 졌습니다..
// 경우의 수를 최대한 짜내서 테스트 코드로 넣어봤는데
// 아직도 어디서 잘못된 지 모르겠네요 ㅠ..
// 4%에서 계속 실패했습니다. 어떤 경우의 수를 빼먹었을 지 아이디어 있으실까요?..

// let fs = require("fs");
// let input = fs.readFileSync("dev/stdin").toString().split("\n");

// let [n, m] = input[0].split(" ").map(Number)
// let a, b, cost
// const arr = []

// for (let i = 1; i < n; i++) {
//   [a, b, cost] = input[i].split(" ").map(Number)
//   arr[a-1] = []
//   arr[b-1] = []
// }

// for (let i = 1; i < n; i++) {
//   [a, b, cost] = input[i].split(" ").map(Number)
//   arr[a-1][b-1] = cost
//   arr[b-1][a-1] = cost
// }

// let answer = 0

// function dfs(arr, start, end, visited) {
//   if(arr[start-1]){
//     if (arr[start - 1][end - 1]) {
//       answer += arr[start - 1][end - 1]
//       console.log(answer)
//       answer = 0
//     } else {
//       visited[start - 1] = true
//       for (let i = 0; i < arr[start - 1].length; i++) {
//         if (arr[start - 1][i] && !visited[i]) {
//           answer += arr[start - 1][i]
//           dfs(arr, i + 1, end, visited)
//         }
//       }
//       answer = 0
//     }
//   }
// }

// for (let i = n; i < n + m; i++) {
//   let [start, end] = input[i].split(" ").map(Number)
//   if (start == end) {
//     console.log(answer)
//     continue
//   }
//   let visited = new Array(n).fill(false)
//   dfs(arr, start, end, visited)
// }

let fs = require("fs");
let input = fs.readFileSync("index.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i <= n; i++) {
  let [x, y, cost] = input[i].split(" ").map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

function dfs(x, dist) {
  if (visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  for (let [y, cost] of graph[x]) dfs(y, dist + cost);
}

for (let i = 0; i < m; i++) {
  let [x, y] = input[n + i].split(" ").map(Number);
  visited = new Array(n + 1).fill(false);
  distance = new Array(n + 1).fill(-1);
  dfs(x, 0);
  console.log(distance[y]);
}
