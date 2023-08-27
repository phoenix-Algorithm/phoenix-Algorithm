// 전 문제의 중복 수열을 그대로 유지하고
// 또 비내림차순 점검 코드를 만드려다
// 강의 코드였던 start 변수를 활용해보고자 이번엔 start 변수로 구현했습니다.

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let selected = [];

let answer = "";
function dfs(arr, depth, start) {
  if (depth == m) {
    let result = [];
    for (i of selected) result.push(arr[i]);
    for (x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = start; i < arr.length; i++) {
    selected.push(i);
    dfs(arr, depth + 1, i);
    selected.pop();
  }
}

dfs(arr, 0, 0);
console.log(answer);
