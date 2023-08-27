// 재귀함수 전에 조건문을 만드는 아이디어는 떠오르는데
// 재귀함수가 아직도 머리가 아프네요..
// 재귀함수 부분 코드 참고하고 구상해본다고 했는데 결국 강의 코드랑 같더라고요
// 재귀함수랑 조금씩 친해지는 중입니다.. 아직 하나도 안 친하긴 하지만요..

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  [s, b] = input[i].split(" ").map(Number);
  arr.push([s, b]);
}

let visited = new Array(n).fill(false);
let result = [];
let minValue = 1e9;

let totalS;
let totalB;

function dfs(depth, start) {
  if (depth >= 1) {
    totalS = 1;
    totalB = 0;
    for (x of result) {
      totalS *= arr[x][0];
      totalB += arr[x][1];
    }
    minValue = Math.min(minValue, Math.abs(totalS - totalB));
  }
  for (let i = start; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(i);
    dfs(depth + 1, i + 1);
    visited[i] = false;
    result.pop();
  }
}

dfs(0, 0);
console.log(minValue);
