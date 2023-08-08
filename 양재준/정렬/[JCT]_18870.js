const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let N = input[0];
let data = input[1].split(' ').map(Number);

let arr = [...new Set(data)];

arr.sort((a, b) => a - b);

/* indexof로 해결하려고 했으나 시간초과 */
/* let answer = '';
for (let i = 0; i < N; i++) {
  answer += arr.indexOf(data[i]) + ' ';
} */

/* 강의 답안 */
/* let myMap = new Map();
for (let i = 0; i < arr.length; i++) {
  myMap.set(arr[i], i);
}
let answer = '';
for (x of data) answer += myMap.get(x) + ' '; */

/* 강의 답안 본 후 맵 대신 객체로 해봄*/
let answer = '';
const obj = {};
arr.forEach((x, i) => {
  obj[x] = i;
});
for (let i = 0; i < data.length; i++) {
  answer += obj[data[i]] + ' ';
}

console.log(answer);
