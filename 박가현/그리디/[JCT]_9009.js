// 내 코드
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [n, input] = fs.readFileSync(path).toString().trim().split('\n');
let array = input.split(' ').map(Number);
let obj = {};
let count = 0;
for (let i of array) {
  if (obj[i] > 0) {
    obj[i] -= 1;
  } //화살이 새로 필요한거
  else {
    count++;
  } //화살이 존재함
  obj[i - 1] += 1;
}
console.log(count);
