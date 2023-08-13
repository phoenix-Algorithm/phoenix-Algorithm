// 1789 : 수들의 합

let fs = require("fs");
let N = Number(fs.readFileSync("dev/stdin").toString().trim());

let cnt = 1;
let arr = 0;

while (N > 0) {
  if (N - cnt >= 0) {
    N -= cnt;
    arr++;
  }
  cnt++;
  if (N < cnt) {
    break;
  }
}

console.log(arr);
