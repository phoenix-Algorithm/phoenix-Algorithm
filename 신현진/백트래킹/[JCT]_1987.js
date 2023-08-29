//강의답안 봄
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");
let [r, c] = input[0].split(" ").map(Number);

let arr = [];
for (let i = 1; i <= r; i++) arr.push(input[i]);

//좌표 상하좌우
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
//중복되지 않도록 set 사용
let visited = new Set();
let maxDepth = 0;

function dfs(depth, x, y) {
  maxDepth = Math.max(maxDepth, depth);
  //상하좌우 4방향을 탐색하므로 for문 4번 반목
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    //맵을 벗어나면 무시
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
    //방문완료한 좌표면 무시
    if (visited.has(arr[nx][ny])) continue;
    //방문
    visited.add(arr[nx][ny]);
    dfs(depth + 1, nx, ny);
    visited.delete(arr[nx][ny]);
  }
}

//처음 출발하는 좌표
visited.add(arr[0][0]);
dfs(1, 0, 0);
console.log(maxDepth);
