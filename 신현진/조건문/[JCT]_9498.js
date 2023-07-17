let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let score = ~~input[0];

let answer =
  score >= 90
    ? "A"
    : score <= 89 && score >= 80
    ? "B"
    : score <= 79 && score >= 70
    ? "C"
    : score <= 69 && score >= 60
    ? "D"
    : "F";

console.log(answer);
