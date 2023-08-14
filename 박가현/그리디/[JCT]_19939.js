let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split(' ').map(Number);
let n = input[0];
let k = input[1];

let num = ((k + 1) * k) / 2; // 등차수열 합 공식
if (n < num) {
  console.log(-1); // 등차수열 합 보다도 작으면 -1
} else {
  let a = n - num;
  if (a % k === 0) {
    console.log(k - 1);
  } else {
    console.log(k);
  }
}
