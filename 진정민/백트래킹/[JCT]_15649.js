// 강의 코드
// 재귀 함수를 쓰는 게 아직 어색하고
// 그렇다 보니 아이디어를 제대로 내지 못해 강의를 보고 풀었습니다.

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false);
let selected = [];

let answer = "";
function dfs(arr, depth) {
  if (depth == m) {
    let result = [];
    for (i of selected) result.push(arr[i]);
    for (x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);
