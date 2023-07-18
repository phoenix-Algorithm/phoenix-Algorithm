let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

//시간초과
//못풀었음
/*let num = ~~input[0];

for (let i = 1; i <= num; i++) {
  let [a, b] = input[i].split(" ");
  console.log(~~a + ~~b);
}*/

//풀이: 문자열로 정리해 한번에 출력하기
let test = ~~input[0];
let answer = "";

for (let i = 1; i <= test; i++) {
  let data = input[i].split(" ");
  let a = ~~data[0];
  let b = ~~data[1];
  answer += a + b + "\n";
}

console.log(answer);
