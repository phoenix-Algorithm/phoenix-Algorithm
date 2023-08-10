// 2-1. 설탕 배달

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let N = Number(input[0]);
let count = 0;

while (N > 0) {
  if (N % 5 === 0) {
    N -= 5;
    count++;
  } else {
    N -= 3;
    count++;
  }
}

if (N === 0) {
  console.log(count);
} else {
  console.log(-1);
}

// 강의 풀이
// 5로 나누어 떨어지는지 확인하고
// 5로 나누어 떨어지지 않으면 5로 나누어 떨어질 때까지 3을 빼준다.
// 0이 될 때까지 5를 빼준다.

let flag = false;

while (N >= 0) {
  // N이 0ㅇ이 되었거나, N로 나누어 떨어지는 값인 경우
  if (N == 0 || N % 5 == 0) {
    count += parseInt(N / 5);
    console.log(count);
    flag = true;
    break;
  }
  N -= 3;
  count += 1;
}

if (!flag) {
  console.log(-1);
}
