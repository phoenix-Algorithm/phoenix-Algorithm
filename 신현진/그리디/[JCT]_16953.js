let fs = require("fs");
let [A, B] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let count = 0;
let flag = true;

while (B > A) {
  if (B % 2 === 0) {
    B = parseInt(B / 2);
    count++;
  } else if (B % 10 === 1) {
    B = (B - 1) / 10;
    count++;
  } else {
    flag = false;
    break;
  }
}

if (flag && B == A) {
  console.log(count + 1);
} else {
  console.log("-1");
}
