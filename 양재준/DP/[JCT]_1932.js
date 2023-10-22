const fs = require('fs');
let [n, ...triangle] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
n = +n;

triangle = triangle.map((el) => el.split(' ').map(Number));
let memo = Array.from(Array(n), () => Array(n).fill(-1));
function maxSum(triangle) {
  function dfs(row, col) {
    if (row === n) return 0;

    if (memo[row][col] !== -1) return memo[row][col]; // 이미 계산된 값이 있다면 그 값을 반환

    // 현재 위치의 값 + 현재 위치에서 대각선 왼쪽 또는 오른쪽으로 내려가는 경로 중 최대값
    memo[row][col] = triangle[row][col] + Math.max(dfs(row + 1, col), dfs(row + 1, col + 1));
    return memo[row][col];
  }

  return dfs(0, 0);
}

console.log(maxSum(triangle));
