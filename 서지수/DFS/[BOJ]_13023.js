// ABCDE

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

arr = Array.from(Array(N), () => []);
for (let i = 1; i <= M; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  arr[x].push(y);
  arr[y].push(x);
}

let answer = 0;
let visited = new Array(N).fill(false);

// dfs 함수
const dfs = (value, count) => {
  visited[value] = true;
  if (answer === 1) {
    return;
  }
  if (count === 5) {
    answer = 1;
    return;
  }
  arr[value].forEach(v => {
    if (!visited[v]) {
      dfs(v, count + 1);
    }
  });
  visited[value] = false;
};

for (let i = 0; i < N; i++) {
  if (answer != 0) break;
  dfs(i, 1);
}

console.log(answer);
