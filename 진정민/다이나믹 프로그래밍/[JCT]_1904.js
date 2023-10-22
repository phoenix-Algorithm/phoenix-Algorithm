// 문제를 접근하다 결과값이 피보나치 수열이란 것을 알고 문제를 해결하긴 했습니다.
// 중간에 배열에 값을 넣을 때 나머지 계산을 하지 않고 넣어 메모리에 저장 가능한 정수가 초과 되어
// NaN이 나왔던 이슈가 있었지만 나머지 계산을 먼저 하고 넣어줘 해결했습니다.
// 근데 피보나치 수열로 풀어도 되나 아쉽긴 합니다/

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);

let dx = [1, 1, 2];

for (let i = 3; i <= n; i++) {
  dx[i] = (dx[i - 1] + dx[i - 2]) % 15746;
}

console.log(dx[n]);
