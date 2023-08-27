// 강의 코드
// 재귀함수 적응하기가 매우 어렵다.
// 이번 문제로 조금 더 이해가 되긴 했는데
// 혼자서 작성하라면 못 하겠다..

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
let n = 0;
let arr = [];

function dfs(result, depth) {
  if (depth == n - 1) {
    // 현재 순열 처리(중복 순열)
    let str = "";
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i];
    str += arr[n - 1] + "";
    current = eval(str.split(" ").join("")); // 공백을 제거한 뒤 수식 계산
    console.log(str, current, result);
    if (current == 0) console.log(str); // 수식의 결과가 0이 되는 경우 출력
    return;
  }
  for (let x of [" ", "+", "-"]) {
    // 여기가 이해하기 어려웠다..
    result.push(x);
    dfs(result, depth + 1);
    result.pop();
  }
}

for (let tc = 1; tc <= testCase; tc++) {
  n = Number(input[tc]);
  arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  dfs([], 0);
  console.log();
}
