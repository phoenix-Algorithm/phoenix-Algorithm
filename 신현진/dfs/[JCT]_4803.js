//강의답안 봄
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

//무방향 그래프에서 사이클 여부 확인
function isCycle(x, prev) {
  //현재노드 방문
  visited[x] = true;
  //다음 노드를 하나씩 확인
  for (let y of graph[x]) {
    //아직 방문하지 않은 노드라면
    if (!visited[y]) {
      //다음 노드를 기준으로 사이클이면 t
      if (isCycle(y, x)) return true;
    }
    //방문한 적은 있는데 직전 노드가 아니라면 사이클
    else if (y != prev) return true;
  }
  return false;
}

let line = 0;
let tc = 1;

while (true) {
  let [n, m] = input[line].split(" ").map(Number);
  if ((n == 0) & (m == 0)) break;
  graph = [];
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 1; i <= m; i++) {
    let [x, y] = input[line + i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  visited = new Array(n + 1).fill(false);
  //트리 개수
  let tree = 0;
  for (let i = 1; i <= n; i++) {
    //연결요소일 때
    if (!visited[i]) {
      //1번에서 시작하는데 1번 노드는 prev 노드가 없기 때문에 0으로 세팅
      if (!isCycle(i, 0)) tree++;
    }
  }
  if (tree == 0) console.log(`Case ${tc}: No trees.`);
  else if (tree == 1) console.log(`Case ${tc}: There is one tree.`);
  else console.log(`Case ${tc}: A forest of ${tree} trees.`);
  line += m + 1;
  tc++;
}
