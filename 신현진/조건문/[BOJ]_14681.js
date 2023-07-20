let fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let num1 = ~~input[0];
let num2 = ~~input[1];

if (num1 > 0 && num2 > 0) {
  console.log(1);
} else if (num1 > 0 && num2 < 0) {
  console.log(4);
} else if (num1 < 0 && num2 > 0) {
  console.log(2);
} else console.log(3);
