// 2. 문자열 반복

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("input.txt").toString().split("\n");

const tc = Number(input[0]);

for (let i = 1; i <= tc; i++) {
  const data = input[i].split(" ");
  const n = Number(data[0]);

  let answer = "";
  for (let j = 0; j < data[1].length; j++) {
    for (let k = 0; k < n; k++) {
      answer += data[1][j];
    }
  }
  console.log(answer);
}

// 강의 정답 코드
// repeat를 이용해서 문자열 반복하기
for (let i = 1; i <= tc; i++) {
  const data = input[i].split(" ");
  const n = Number(data[0]);

  let answer = "";
  for (let j = 0; j < data[1].length; j++) {
    answer += data[1][j].repeat(n);
  }
  console.log(answer);
}
