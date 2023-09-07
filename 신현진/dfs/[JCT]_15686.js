//강의답안 봄
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
//전체 치킨집 위치 배열
let chicken = [];
//전체 집 위치 배열
let house = [];

//전체 도시 정보 입력받기
for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ").map(Number);
  for (let j = 0; j < n; j++) {
    if (line[j] == 1) house.push([i, j]);
    if (line[j] == 2) chicken.push([i, j]);
  }
}

//치킨집 방문 여부
let visited = new Array(chicken.length).fill(false);
//현재 조합에 포함된 원소
let selected = [];
let answer = 1e9;

function dfs(depth, start) {
  if (depth == m) {
    let result = [];
    for (let i of selected) result.push(chicken[i]);
    //치킨거리 합
    let sum = 0;
    for (let [hx, hy] of house) {
      let temp = 1e9;
      for (let [cx, cy] of result) {
        temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
      sum += temp;
    }
    answer = Math.min(answer, sum);
    return;
  }

  //start부터 하나씩 확인
  for (let i = start; i < chicken.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(answer);
