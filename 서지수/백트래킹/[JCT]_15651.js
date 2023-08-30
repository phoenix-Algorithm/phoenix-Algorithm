// 2-2. N과 M (3)

// 강의 풀이
let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let selected = [];

answer = '';
const dfs = (arr, depth) => {
  if (depth === m) {
    let result = [];
    for (i of selected) result.push(arr[i]);
    for (x of result) answer += x + ' ';
    answer += '\n';
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    selected.push(i);
    dfs(arr, depth + 1);
    selected.pop();
  }
};
dfs(arr, 0);
console.log(answer);
