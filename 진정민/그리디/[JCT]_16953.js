let fs = require("fs");
let [A, B] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let count = 1;

while (B > A) {
  if (B % 2 === 0) {
    B /= 2;
    count++;
  } else if (B % 10 === 1) {
    B -= 1;
    B /= 10;
    count++;
  } else {
    break;
  }
}

if (B === A) {
  console.log(count);
} else {
  console.log(-1);
}
