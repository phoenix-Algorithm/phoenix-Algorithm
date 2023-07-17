// 3. 상수

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("input.txt").toString().split("\n");

let [a, b] = input[0].split(" ");

let c = "";
let d = "";
for (let i = 2; i >= 0; i--) {
  c += a[i];
  d += b[i];
}

console.log(Math.max(Number(c), Number(d)));

// 강의 정답 코드
// 세자리로 정해져있기때문에 굳이 반복문 안쓰고 그냥 고정값으로 해도됨

const newA = a[2] + a[1] + a[0];
const newB = b[2] + b[1] + b[0];
