// 3-4. 피보나치

// 강의 풀이
let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

// 피보나치 수들 계산
pibo = [];
pibo.push(0);
pibo.push(1);
while (pibo[pibo.length - 1] < 1000000000) {
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
}

let testCases = Number(input[0]);
for (let tc = 1; tc <= testCases; tc++) {
  let N = Number(input[tc]);
  let result = [];
  let i = pibo.length - 1;
  while (N > 0) {
    if (N >= pibo[i]) {
      N -= pibo[i];
      result.push(pibo[i]);
    }
    i--;
  }
  console.log(result.reverse().join(" "));
}
