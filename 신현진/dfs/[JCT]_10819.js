//강의답안 봄
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let n = +input[0];
let arr = input[1].split(" ").map(Number);
//arr에 있는 숫자 하나씩 start number로 설정해서
//numbers에 각각 순열의 경우를 넣어보고,
//numbers에서 |A[0] - A[1]| + |A[1] - A[2]| + ... + |A[N-2] - A[N-1]|를 계산해서
//Math.max로 그 중 최댓값을 반환
//조합만드는 로직을 어떻게 해야할지 모르겠네
//--------------------------------------------
//=> 백트래킹으로 해결

function dfs(depth) {
  if (depth == n) {
    let current = 0;
    for (let i = 0; i < n - 1; i++)
      current += Math.abs(result[i] - result[i + 1]);
    maxValue = Math.max(maxValue, current);
  }
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(arr[i]);
    dfs(depth + 1);
    visited[i] = false;
    result.pop();
  }
}

let visited = new Array(n + 1).fill(false);
let result = [];
let maxValue = -Infinity;
dfs(0);

console.log(maxValue);
