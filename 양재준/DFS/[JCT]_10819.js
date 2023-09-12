let [N, data] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

N = +N;
data = data.split(' ').map(Number);

const visited = Array(N).fill(false);

let max = -1;

const result = [];
function dfs(cnt) {
  if (cnt == N) {
    let absSum = 0;
    for (let i = 0; i < N - 1; i++) {
      absSum += Math.abs(result[i] - result[i + 1]);
    }
    max = Math.max(max, absSum);
  }
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(data[i]);
      dfs(cnt + 1);
      result.pop();
      visited[i] = false;
    }
  }
}
dfs(0);
console.log(max);
