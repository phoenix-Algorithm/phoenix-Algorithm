let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let km = input[1].split(' ').map(Number);
let a = input[2].split(' ').map(Number);
let minValue = 100000;

for (let i in km) {
  if (minValue > a[i]) {
    minValue = a[i];
  }
  km[i] = km[i] * minValue;
}
let answer = km.reduce((acc, value) => {
  acc += value;
  return acc;
});

console.log(answer);

// 부분 성공 58
