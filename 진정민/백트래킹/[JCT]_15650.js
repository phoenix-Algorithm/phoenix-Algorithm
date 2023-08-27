// 처음 문제에서 새로운 조건만 추가하여 구현하였습니다.
// 강의에선 start 변수를 추가하여 구현하였는데
// 효율은 강의 코드가 좋을 것 같습니다.

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
    for (let i = 0; i < result.length - 1; i++) {
      // 답에 추가하기 전 오름차순인지 점검 후 추가하도록 구현
      if (result[i] > result[i + 1]) return;
    }
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
