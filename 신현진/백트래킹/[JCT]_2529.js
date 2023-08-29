let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let k = +input[0];

let arr = input[1].split(" ");
let visited = new Array(10).fill(false);

let result = [];
let current = "";
let first = "";

function dfs(depth) {
  if (depth === k + 1) {
    //부등식 만족 플래그
    let check = true;
    for (let i = 0; i < k; i++) {
      if (arr[i] == "<") {
        if (result[i] > result[i + 1]) check = false;
      } else if (arr[i] == ">") {
        if (result[i] < result[i + 1]) check = false;
      }
    }
    if (check) {
      current = "";
      for (let x of result) current += x + "";
      //첫째 문자열: 가장 작은 수
      if (first == "") {
        first = current;
      }
    }
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;
    result.push(i);
    visited[i] = true;
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(current + "\n" + first);
