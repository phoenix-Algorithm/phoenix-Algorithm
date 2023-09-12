let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [num, input] = fs.readFileSync(path).toString().trim().split('\n');
let selected = [];
let arr = input.split(' ').map(Number);
let answer = -100;
function dfs(depth) {
  if (depth === Number(num)) {
    // 모든 순열을 확인하는 부분
    let sum = 0;
    for (let i = 0; i < selected.length - 1; i++) {
      sum += Math.abs(arr[selected[i]] - arr[selected[i + 1]]);
    }
    answer = Math.max(sum, answer);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    // 하나씩 원소 인덱스(index)를 확인하며
    if (selected.includes(i)) continue;
    selected.push(i); // 현재 원소 선택
    dfs(depth + 1); // 재귀 함수 호출
    selected.pop(); // 현재 원소 선택 취소
  }
}
dfs(0);
console.log(answer);
