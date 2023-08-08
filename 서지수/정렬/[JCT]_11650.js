// 2-1. 좌표 정렬하기

// 나의 풀이
// 시간 초과
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

arr.map((v) => console.log(v.join(" ")));

// 강의 풀이
// 풀이는 맞았는데 console.log()를 매번 찍어줬더니 시간 초과가 났는데
// 생각을 못하고 강의를 봤더니 한번에 출력해줘야해서 수정
answer = "";
arr.map((v) => (answer += v.join(" ") + "\n"));
console.log(answer.trim());
