// 2-2. A -> B

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [A, B] = input[0].split(" ").map(Number);
let count = 1;
let flag = true;

// 내 풀이

while (B > A) {
  if (B % 2 === 0) {
    B = parseInt(B / 2);
    count++;
  } else if (String(B).slice(String(B).length - 1) === "1") {
    B = Number(String(B).slice(0, -1));
    count++;
  } else {
    flag = false;
    break;
  }
}

if (flag) {
  console.log(count);
} else {
  console.log(-1);
}

// 강의 풀이

while (B >= A) {
  if (A === B) {
    flag = true;
    break;
  }
  if (B % 2 === 0) {
    B = parseInt(B / 2);
    count++;
  } else if (B % 10 === 1) {
    B = parseInt(B / 10);
    count++;
  } else {
    break;
  }
  count++;
}

if (flag) {
  console.log(count);
} else {
  console.log(-1);
}
