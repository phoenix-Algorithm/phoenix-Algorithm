// 2839 :  설탕 배달

let fs = require("fs");
let n = Number(fs.readFileSync("index.txt").toString().trim());

let answer = 0;

while (n >= 0) {
  if (n % 5 === 0) {
    answer += n / 5;
    break;
  } else {
    n -= 3;
    answer += 1;
  }
}

if (n >= 0) {
  console.log(answer);
} else {
  console.log(-1);
}
