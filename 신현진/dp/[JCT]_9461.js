let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

let t = input[0];
let d = new Array(101).fill(0);

d[1] = 1;
d[2] = 1;
d[3] = 1;

for (let i = 4; i <= 100; i++) {
  d[i] = d[i - 2] + d[i - 3];
}

for (let i = 1; i <= t; i++) {
  console.log(d[input[i]]);
}
