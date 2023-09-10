let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let visited;
function isCycle(x) {
  // 현재 노드 방문 처리
  if (visited[x] && x === cnt[0]) {
    return true;
  } else if (visited[x] && x !== cnt[0]) return false;
  cnt.push(x);
  visited[x] = true;
  let v = graph[x];

  if (isCycle(v)) return true;
  else return false;
}

let cnt = [];
let answer = [];

let graph = [];
let n = Number(input[0]);
for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= n; k++) {
    let x = Number(input[k]);
    graph[k] = x;
  }
  visited = new Array(n + 1).fill(false);
  for (let i = 1; i <= n; i++) {
    if (answer.includes(i)) continue;
    if (isCycle(i)) {
      answer = [...answer, ...cnt];
    }
    cnt = [];
    visited = new Array(n + 1).fill(false);
    // 사이클이 아니라면 트리이므로, 카운트하기
  }
}
console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join('\n'));
