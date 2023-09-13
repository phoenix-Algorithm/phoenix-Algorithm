// 배운 거 활용하니 어렵지 않게 풀었습니다

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let visited = new Array(n).fill(false);
let selected = [];

let answer = 0;

function dfs(depth) {
  if (depth == n) {
    let result = [];
    for (i of selected) result.push(arr[i]);
    answer = Math.max(answer, math(result));
  }
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

function math(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += Math.abs(arr[i - 1] - arr[i]);
  }
  return sum;
}

dfs(0);
console.log(answer);
