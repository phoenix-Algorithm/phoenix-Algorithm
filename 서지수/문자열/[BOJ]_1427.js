// 소트인사이드

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("input.txt").toString().split("\n");

const s = input[0];

newS = s.split("").sort();
let answer = "";
for (let i = newS.length - 1; i >= 0; i--) {
  answer += newS[i];
}

console.log(answer);
