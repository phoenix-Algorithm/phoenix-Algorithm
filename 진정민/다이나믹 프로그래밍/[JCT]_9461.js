// 너무 쉽게 풀었나 싶긴 한데
// 전 그림을 보고 i-1이랑 i-5를 더했는데
// 강의에선 i-2랑 i-3을 더했더라고요

let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().split("\n");

let t = Number(input[0]);

let max = 0;
for (let i = 1; i <= t; i++) {
  max = Math.max(max, Number(input[i]));
}

let p = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

if (max > 10) {
  for (let i = 10; i < max; i++) {
    p[i] = p[i - 1] + p[i - 5];
  }
}

let i = 1;

while (t--) {
  console.log(p[Number(input[i++]) - 1]);
}
