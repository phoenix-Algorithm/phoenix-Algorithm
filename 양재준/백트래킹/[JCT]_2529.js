const fs = require('fs');
let [k, operators] = fs.readFileSync('dev/stdin').toString().split('\n');

k = Number(k);
operators = operators.split(' ');

let visited = Array(10).fill(false);
let selected = [];
let answer = [];

// 이전 값과 넣을 값을 해당 연산자로 비교
function possible(depth, i) {
  if (depth === 0) return true;
  const operator = operators[depth - 1];
  if (operator === '>' && selected[depth - 1] < i) return false;
  if (operator === '<' && selected[depth - 1] > i) return false;
  return true;
}

function dfs(depth) {
  if (depth === k + 1) {
    answer.push(selected.join(''));
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;
    if (possible(depth, i)) {
      visited[i] = true;
      selected.push(i);
      dfs(depth + 1);
      visited[i] = false;
      selected.pop();
    }
  }
}

dfs(0);
console.log(answer.at(-1) + '\n' + answer[0]);
