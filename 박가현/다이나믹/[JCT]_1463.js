let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

// 내 코드
// let num = Number(input[0]);
// let num_array = [num];
// let answer = 0;
// let isAnswer = false;
// while (true) {
//   let new_array = [];
//   for (let i = 0; i < num_array.length; i++) {
//     let a = num_array[i];
//     if (a % 3 === 0) {
//       new_array.push(a / 3);
//     }
//     if (a % 2 === 0) {
//       new_array.push(a / 2);
//     }
//     new_array.push(a - 1);
//     if (a / 3 === 1 || a / 2 === 1 || a - 1 === 1) {
//       isAnswer = true;
//       break;
//     }
//   }
//   num_array = [...new_array];
//   new_array = [];
//   answer++;
//   if (isAnswer) {
//     break;
//   }
// }

// console.log(answer);
let n = Number(input[0]);
let d = new Array(n + 1).fill(0);
for (let x = 2; x <= n; x++) {
  d[x] = d[x - 1]; // 1을 빼기
  if (x % 2 == 0) {
    d[x] = Math.min(d[x], d[parseInt(x / 2)]); // 2로 나누기
  }
  if (x % 3 == 0) {
    d[x] = Math.min(d[x], d[parseInt(x / 3)]); // 3으로 나누기
  }
  d[x]++;
}
console.log(d[n]);
