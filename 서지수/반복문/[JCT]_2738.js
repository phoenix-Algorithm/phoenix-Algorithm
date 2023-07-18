// 2. 구구단

let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin"));

for (i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
