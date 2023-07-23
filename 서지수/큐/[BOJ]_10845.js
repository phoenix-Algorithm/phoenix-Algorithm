// 큐

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let que = [];
let answer = "";
for (let i = 1; i <= Number(input[0]); i++) {
  const A = input[i].split(" ");
  switch (A[0]) {
    case "push":
      que.push(Number(A[1]));
      break;
    case "pop":
      if (que.length === 0) {
        answer += "-1\n";
      } else {
        answer += `${que[0]}\n`;
        que = que.slice(1);
      }
      break;
    case "size":
      answer += `${que.length}\n`;
      break;
    case "empty":
      if (que.length === 0) {
        answer += `1\n`;
      } else {
        answer += `0\n`;
      }
      break;
    case "front":
      if (que.length === 0) {
        answer += `-1\n`;
      } else {
        answer += `${que[0]}\n`;
      }
      break;
    case "back":
      if (que.length === 0) {
        answer += `-1\n`;
      } else {
        answer += `${que.at(-1)}\n`;
      }
      break;
  }
}

console.log(answer);

// 블로그 풀이
// 답을 문자열로 하기 보다 배열로 답을 모은 뒤에 .join('\n')으로 출력한다.
// if문으로 조건을 가르기보다 OR 연산자, 삼항 연산자로 코드를 줄인다.

ans = [];
for (let i = 1; i <= Number(input[0]); i++) {
  const A = input[i].split(" ");
  switch (A[0]) {
    case "push":
      que.push(Number(A[1]));
      break;
    case "pop":
      ans.push(que[0] || -1);
      que = que.slice(1);
      break;
    case "size":
      ans.push(que.length);
      break;
    case "empty":
      ans.push(que.length === 0 ? 1 : 0);
      break;
    case "front":
      ans.push(que[0] || -1);
      break;
    case "back":
      ans.push(que.at(-1) || -1);
      break;
  }
}

console.log(ans.join("\n"));
