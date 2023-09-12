let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let selected = [];
let n = Number(input[0]);
let numbers = input[1].split(' ').map(Number);
const operator = input[2].split(' ').map(Number);
const oper = ['+', '-', '*', '/'];
const arr = [];
let minResult = 1e10;
let maxResult = -1e10;
function dfs(depth) {
  if (depth === n - 1) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (arr[selected[i - 1]] === '+') {
        result = result + numbers[i];
      } else if (arr[selected[i - 1]] === '-') {
        result = result - numbers[i];
      } else if (arr[selected[i - 1]] === '*') {
        result = result * numbers[i];
      } else if (arr[selected[i - 1]] === '/') {
        if (result < 0) {
          result = Math.floor(Math.abs(result) / numbers[i]);
          result = -result;
        } else {
          result = Math.floor(result / numbers[i]);
        }
      }
    }
    minResult = Math.min(result, minResult);

    maxResult = Math.max(result, maxResult);

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
for (let i = 0; i < operator.length; i++) {
  for (let j = 0; j < operator[i]; j++) {
    arr.push(oper[i]);
  }
}
dfs(0);
if (maxResult === -0 || maxResult === +0) maxResult = 0;
if (minResult === -0 || minResult === +0) minResult = 0;
console.log(maxResult);
console.log(minResult);
