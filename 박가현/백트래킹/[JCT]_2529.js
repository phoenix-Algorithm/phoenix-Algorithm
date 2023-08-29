let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(input[0]);
const sign = input[1].split(' ');
let answer = [0, 1];
let selected = [];
function dfs(depth) {
  if (depth == n + 1) {
    for (let i = 0; i < sign.length; i++) {
      if (sign[i] === '<') {
        if (selected[i] > selected[i + 1]) return;
      } else {
        if (selected[i] < selected[i + 1]) return;
      }
    }
    let str = selected.join('');

    if (Number(answer[1]) > Number(str) || Number(answer[1]) === 1) {
      answer[1] = str;
    } else if (Number(answer[0]) < Number(str)) {
      answer[0] = str;
    }
    return;
  }
  for (let i = 0; i <= 9; i++) {
    if (selected.includes(i)) continue;
    selected.push(i);
    dfs(depth + 1); // 재귀 함수 호출
    selected.pop();
  }
}

dfs(0);
console.log(answer.join('\n'));
