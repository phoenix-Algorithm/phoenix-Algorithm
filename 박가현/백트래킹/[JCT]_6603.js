let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');
n = Number(n);
let selected = [];
let array = [];
for (let i = 0; i < n; i++) {
  array.push(input[i].split(' ').map(Number));
}
let num = 0;
let minNum = 10000000000;
function dfs(depth) {
  if (depth == n) {
    console.log(selected);
    for (let i = 0; i < selected.length; i++) {
      if (i === selected.length - 1) {
        num = num + Number(array[selected[i]][selected[0]]);
      } else {
        num = num + Number(array[selected[i]][selected[i + 1]]);
      }
    }
    if (minNum >= num) {
      minNum = num;
    }
    num = 0;
    return;
  }
  for (let i = 0; i < Number(n); i++) {
    if (selected.includes(i)) continue;
    selected.push(i); // 현재 원소 선택
    dfs(depth + 1); // 재귀 함수 호출
    selected.pop(); // 현재 원소 선택 취소
  }
}

dfs(0);
console.log(minNum);
