let fs = require("fs");
let [n, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

n = +n;
let inputMap = [];

for (let i = 0; i < n; i++) {
  inputMap.push(input[i].trim().split("").map(Number));
}

let count = 0;
let countArr = [];

function dfs(graph, n, x, y) {
  //범위를 벗어나는 경우 종료
  if (x <= -1 || x >= n || y <= -1 || y >= n) return false;
  //집이 있을 때
  if (graph[x][y] == 1) {
    //방문완료했다고 -1로 나타냄
    graph[x][y] = -1;

    //상하좌우도 재귀적으로 호출
    dfs(graph, n, x - 1, y);
    dfs(graph, n, x, y - 1);
    dfs(graph, n, x + 1, y);
    dfs(graph, n, x, y + 1);
    count++;
    return true;
  }
  return false;
}

//단지 개수
let complex = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(inputMap, n, i, j)) {
      complex++;
      countArr.push(count);
      count = 0;
    }
  }
}
console.log(complex);
console.log(countArr.sort((a, b) => a - b).join("\n"));
