let fs = require("fs");
let input = +fs.readFileSync("./input.txt").toString().trim();

//강의 답안
let count = 0;
let flag = false;

while (input >= 0) {
  if (input == 0 || input % 5 == 0) {
    count += parseInt(input / 5);
    console.log(count);
    flag = true;
    break;
  }
  input -= 3;
  count += 1;
}

if (!flag) {
  console.log(-1);
}
