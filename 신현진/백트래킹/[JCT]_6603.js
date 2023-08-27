let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let idx = input.indexOf("0");
input = input.slice(0, idx);

let arr = [];
let k = 0;

let selected = [];
let visited = new Array(k).fill(false);

let answer = "";

for (let i = 0; i < input.length; i++) {
  k = +input[i][0];
  arr = input[i].slice(1).split(" ").map(Number);
  arr.shift();
  dfs(arr, 0, 0);
  answer += "\n";
}

function dfs(arr, depth, start) {
  if (depth === 6) {
    let result = [];
    for (i of selected) result.push(arr[i]);
    for (x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

console.log(answer);
