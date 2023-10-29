const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const [N, M] = input.shift();
let answer = 0;
const friends = Array.from(Array(N), () => []);

input.forEach((v) => {
  const [x, y] = v;
  friends[x].push(y);
  friends[y].push(x);
});

function dfs(value, cnt) {
  visited[value] = true;
  if (answer == 1) return;
  if (cnt == 5) {
    answer = 1;
    return;
  }
  friends[value].forEach((v) => {
    if (!visited[v]) {
      dfs(v, cnt + 1);
    }
  });
  visited[value] = false;
}

let visited = new Array(N).fill(false);
for (let i = 0; i < N; i++) {
  if (answer != 0) break;
  dfs(i, 1);
}

console.log(answer);

/*내 풀이
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  if (arr[a] === undefined) arr[a] = [];
  if (arr[b] === undefined) arr[b] = [];
  arr[a].push(b);
  arr[b].push(a);
}
let answer = 0;
function dfs(arr, v, visited, result) {
  // 현재 노드를 방문 처리
  visited[v] = true;
  for (i of arr[v]) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(i);
      dfs(arr, i, visited, result);
      if (result.length === 5) {
        answer = 1;
      }
      const a = result.pop();
      visited[a] = false;
    }
  }
}

for (let i = 0; i < arr.length; i++) {
  let result = [i];
  let visited = new Array(n).fill(false);
  dfs(arr, i, visited, result);
  if (answer === 1) {
    break;
  }
}
console.log(answer);
 */
