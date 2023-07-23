// 스택

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let stk = [];
let answer = "";
for (let i = 1; i <= Number(input[0]); i++) {
  const A = input[i].split(" ");
  if (A[0] === "push") {
    stk.push(Number(A[1]));
  } else if (A[0] === "pop") {
    if (stk.length === 0) {
      answer += "-1\n";
    } else {
      answer += `${stk.at(-1)}\n`;
      stk.pop();
    }
  } else if (A[0] === "size") {
    answer += `${stk.length}\n`;
  } else if (A[0] === "empty") {
    if (stk.length === 0) {
      answer += `1\n`;
    } else {
      answer += `0\n`;
    }
  } else if (A[0] === "top") {
    if (stk.length === 0) {
      answer += `-1\n`;
    } else {
      answer += `${stk.at(-1)}\n`;
    }
  }
}

console.log(answer);

// 처음에 일일이 출력하도록 했지만 시간 초과가 나와서 문자열에 추가한 뒤 한번에 출력하도록 수정했다.
// if문보다는 switch로 하는게 더 깔끔할 듯
