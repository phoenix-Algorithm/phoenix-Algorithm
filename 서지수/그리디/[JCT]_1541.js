// 1-3. 잃어버린 괄호

// 강의 풀이
let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let groups = input[0].split("-");
let answer = 0;
for (let i = 0; i < groups.length; i++) {
  let cur = groups[i].split("+").map(Number);
  cur = cur.reduce((a, b) => a + b);
  if (i === 0) answer += cur;
  else answer -= cur;
}

console.log(answer);
