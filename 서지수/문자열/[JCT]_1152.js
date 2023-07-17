// 5. 단어의 개수

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("input.txt").toString().split("\n");

// 강의 정답 코드
// trim() 메서드를 이용해서 문자열 양 끝의 공백을 제거한다.
const s = input[0].trim().split(" ");

if (s == "") {
  console.log(0);
} else {
  console.log(s.length);
}
