//ABCDE
//답안 봄
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let visited = new Array(n).fill(false);
let flag = 0;

let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = [];
}
for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  arr[a].push(b);
  arr[b].push(a);
}

function dfs(current, count) {
  visited[current] = true;

  if (flag) return;
  if (count === 4) {
    flag = 1;
    return;
  }

  for (let x of arr[current]) {
    if (!visited[x]) {
      dfs(x, count + 1);
    }
  }
  visited[current] = false;
}

for (let i = 0; i < n; i++) {
  dfs(i, 0);
}

console.log(flag);
