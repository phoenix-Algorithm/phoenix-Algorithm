let fs = require("fs");
let [n, m] = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);

let selected = [];
let answer = "";

function dfs(arr, depth, start) {
  if (depth === m) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = start; i < arr.length; i++) {
    selected.push(i);
    //start부터 시작 -> [1,1] ...
    dfs(arr, depth + 1, i);
    selected.pop();
  }
}

dfs(arr, 0, 0);
console.log(answer);
