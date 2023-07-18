let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split(" ");

//빈 문자열일 때를 생각하지 못함
if (input == "") {
  console.log(0);
} else {
  console.log(input.length);
}
