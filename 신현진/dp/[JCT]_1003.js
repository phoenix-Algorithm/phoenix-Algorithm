let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let t = +input[0];

d = new Array(41).fill(0); //DP 테이블 초기화

d[0] = 0;
d[1] = 1;

for (let i = 2; i <= 40; i++) {
  d[i] = d[i - 1] + d[i - 2];
}

for (let i = 1; i <= t; i++) {
  let x = +input[i];
  if (x === 0) console.log(1, 0);
  else console.log(d[x - 1], d[x]);
}
