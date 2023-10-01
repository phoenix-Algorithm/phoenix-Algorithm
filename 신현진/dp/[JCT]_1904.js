let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = +fs.readFileSync(path).toString().trim();

d = new Array(1000001).fill(0);

d[1] = 1;
d[2] = 2;

for (let i = 3; i <= input; i++) {
  d[i] = (d[i - 2] + d[i - 1]) % 15746;
}

console.log(d[input]);
