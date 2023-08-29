//강의 답안 봄

let fs = require("fs");
let [n, m] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

/*m=2일때 배열
//최대 8이니까 콱 8중 for문 쓰면 안되겠지 ㅎ
let num = [];

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i != j) {
      num.push([i, j]);
    }
  }
}
*/

//계산하려고 하는 원소가 담긴 배열
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
//각 원소 인덱스 별 방문 여부를 알게 해주는 배열
let visited = new Array(n).fill(false);
//현재 포함된 원소
let selected = [];

let answer = "";

function dfs(arr, depth) {
  //console.log("지금 depth: " + depth);
  //깊이가 m과 같으면 끝냄
  if (depth == m) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    //console.log("answer:" + answer);
    return;
  }
  //하나의 원소 인덱스를 확인
  for (let i = 0; i < arr.length; i++) {
    //console.log("지금 i: " + i);
    //(1,1)은 안되기 때문에, 이미 방문한 원소는 무시
    if (visited[i]) continue;
    //현재 원소 선택
    selected.push(i);
    //console.log("selected: " + selected);
    //현재 원소 방문 처리
    visited[i] = true;
    //console.log("visited: " + visited);
    dfs(arr, depth + 1);
    //현재 원소 선택 취소
    selected.pop();
    //console.log("selected pop: " + selected);
    //현재 원소 방문 처리 취소
    visited[i] = false;
    //console.log("visited false: " + visited);
  }
}

dfs(arr, 0);
console.log(answer);
