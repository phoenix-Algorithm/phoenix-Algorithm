//강의답안 봄
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let t = +input[0];

/*let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];

let graph = [];
let visited = new Array(n * m).fill(false);

let matrix = new Array(n * m).fill(0);

for (let i = 2; i <= k + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (!graph[a]) graph[a] = [];
  graph[a].push(b);
}
console.log(matrix);*/

function dfs(graph, n, m, x, y) {
  //범위를 벗어나는 경우에는 즉시 종료시킴
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;
  //현재 노드를 아직 처리하지 않았을때 (1일때)
  if (graph[x][y] == 1) {
    //방문완료했다고 -1로 나타냄
    graph[x][y] = -1;

    //상하좌우도 재귀적으로 호출
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    return true;
  }
  return false;
}

let line = 1;

while (t--) {
  let [m, n, k] = input[line].split(" ").map(Number);
  let graph = [];

  //가로줄로 넣어줌
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
  }

  for (let i = 1; i <= k; i++) {
    //input에서는 x가 왼쪽에 있음
    //배열에서는 왼쪽에 y값(세로)이기 때문에 순서를 바꿔서 넣는 것
    let [y, x] = input[line + i].split(" ").map(Number);
    graph[x][y] = 1;
  }
  //연결되어있는 요소의 수를 계산하기 위한 변수
  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++;
    }
  }
  line += k + 1;
  console.log(answer);
}
