const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(input[0]);
const num = Number(input[1]);
const array = [];
for (let i = 0; i < n; i++) {
  array[i] = [];
  for (let j = 0; j < n; j++) {
    array[i][j] = 0;
  }
}
let direction = ['d', 'r', 'u', 'l'];
let answer = '';
let startNum = n * n;
let index = 0;
let f1 = 0;
let f2 = n - 1;
while (true) {
  if (direction[index] === 'r') {
    for (let i = 0; i < n; i++) {
      if (array[f2][i] !== 0) continue;
      array[f2][i] = startNum;
      if (startNum === num) {
        answer = `${f2 + 1} ${i + 1}`;
      }
      startNum--;
    }
  }
  if (direction[index] === 'u') {
    for (let i = n - 1; i >= 0; i--) {
      if (array[i][f2] !== 0) continue;
      array[i][f2] = startNum;
      if (startNum === num) {
        answer = `${i + 1} ${f2 + 1}`;
      }
      startNum--;
    }
  }
  if (direction[index] === 'l') {
    for (let i = n - 1; i >= 0; i--) {
      if (array[f1][i]) continue;
      array[f1][i] = startNum;
      if (startNum === num) {
        answer = `${f1 + 1} ${i + 1}`;
      }
      startNum--;
    }
  }

  if (direction[index] === 'd') {
    for (let i = 0; i < n; i++) {
      if (array[i][f1] !== 0) continue;
      array[i][f1] = startNum;
      if (startNum === num) {
        answer = `${i + 1} ${f1 + 1}`;
      }
      startNum--;
    }
  }
  if (index === 3) {
    index = 0;
    f2--;
    f1++;
  } else {
    index++;
  }
  if (startNum < 1) break;
}
let ar_answer = [];
for (let i = 0; i < n; i++) {
  let a = array[i].join(' ');
  ar_answer.push(a);
}
console.log(ar_answer.join('\n'));
console.log(answer);
