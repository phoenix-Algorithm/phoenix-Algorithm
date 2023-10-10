//1로 만들기
//강의답안 봄

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let n = +fs.readFileSync(path).toString().trim();

let d = new Array(n + 1).fill(0);

for (let x = 2; x <= n; x++) {
  d[x] = d[x - 1];
  if (x % 2 == 0) d[x] = Math.min(d[x], d[x / 2.0]);
  if (x % 3 == 0) d[x] = Math.min(d[x], d[x / 3.0]);
  d[x]++;
}

console.log(d[n]);
