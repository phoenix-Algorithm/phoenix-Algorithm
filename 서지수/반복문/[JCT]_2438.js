// 3. 별 찍기 - 1

let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin"));

let s = "";
for (i = 0; i < input; i++) {
  for (j = 0; j <= i; i++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);

// 블로그 정답
let star = "";

for (let i = 0; i < input; i++) {
  star += "*";
  console.log(star);
}
