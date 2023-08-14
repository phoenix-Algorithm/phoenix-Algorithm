// 2-4. 신입 사원

// 강의 풀이 수강 후 내 풀이
// 시간 초과, 이중 for문에 shift까지 사용해서 그런 것 같음

// let fs = require("fs");
// let input = fs.readFileSync("dev/stdin").toString().split("\n");

// const T = Number(input.shift());

// for (let i = 0; i < T; i++) {
//   let N = Number(input.shift());
//   arr = [];
//   for (let j = 0; j < N; j++) {
//     arr.push(input.shift().split(" ").map(Number));
//   }
//   arr.sort((a, b) => a[0] - b[0]);

//   let count = 0;
//   let minValue = 100001;

//   arr.forEach((e) => {
//     if (minValue > e[1]) {
//       count++;
//       minValue = e[1];
//     }
//   });
//   console.log(count);
// }

// 강의 풀이
let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const T = Number(input[0]);
let line = 1;

for (let i = 0; i < T; i++) {
  let N = Number(input[line]);
  let arr = [];
  for (let j = line + 1; j <= line + N; j++) {
    arr.push(input[j].split(" ").map(Number));
  }
  arr.sort((a, b) => a[0] - b[0]);

  let count = 0;
  let minValue = 100001;

  arr.forEach((e) => {
    if (minValue > e[1]) {
      count++;
      minValue = e[1];
    }
  });
  console.log(count);
  line += N + 1;
}
