let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let n = +input[0];
let arr = [];
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  arr.push([x, y]);
}

let result = [];
let visited = new Array(n).fill(false);
let answer = 1e9;

function dfs(depth, start) {
  //재료가 1개 이상이면, 전부 가능한 것으로 보기 때문에 1이상일 때로 설정
  if (depth >= 1) {
    //곱셈이니까 처음 수를 1로 두는 것
    let totalX = 1;
    let totalY = 0;
    //인덱스를 하나씩 확인
    for (let i of result) {
      let [x, y] = arr[i];
      totalX *= x;
      totalY += y;
    }
    answer = Math.min(answer, Math.abs(totalX - totalY));
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
console.log(answer);
