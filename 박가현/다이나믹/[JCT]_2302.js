let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n').map(Number);
const seat = [];
let arr = [];
const vip = [];
for (let i = 2; i < input.length; i++) {
  vip.push(input[i]);
}
let index = 0;
let max = 0;
for (let i = 1; i < input[0] + 1; i++) {
  if (vip[index] === i) {
    seat.push(arr);
    arr = [];
    index++;
  } else {
    arr.push(0);
  }
}
seat.push(arr);
for (let a of seat) {
  max = Math.max(max, a.length);
}
let num = [0, 1, 2];
for (let i = 3; i <= max; i++) {
  num[i] = num[i - 1] + num[i - 2];
}
let answer = 1;
for (let a of seat) {
  if (a.length === 0) continue;
  answer *= num[a.length];
}
if (answer === 0) {
  console.log(1);
} else {
  console.log(answer);
}
