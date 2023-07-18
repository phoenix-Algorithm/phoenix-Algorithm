// 별 찍기 - 2

let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin"));

let space = " ".repeat(input);
let star = "";

for (let i = 0; i < input; i++) {
  space = space.replace(" ", "");
  star += "*";
  console.log(`${space}${star}`);
}
