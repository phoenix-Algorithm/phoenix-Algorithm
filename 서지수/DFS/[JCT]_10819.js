// 6-1. 차이를 최대로

// 강의 풀이
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const dfs = depth => {
  if (depth === N) {
    let current = 0;
    for (let i = 0; i < N - 1; i++) {
      current += Math.abs(result[i] - result[i + 1]);
    }
    maxValue = Math.max(maxValue, current);
  }
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(arr[i]);
      dfs(depth + 1);
      visited[i] = false;
      result.pop();
    }
  }
};

const N = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let visited = new Array(10).fill(false);
let result = [];
let maxValue = -101;
dfs(0);
console.log(maxValue);
