// 1-1. 동전 0

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [N, K] = input[0].split(" ").map(Number);
arr = [];
answer = 0;

for (let i = N; i > 0; i--) {
  arr.push(Number(input[i]));
}

for (const j of arr) {
  while (K - j >= 0) {
    K -= j;
    answer++;
  }
}

console.log(answer);

// 강의 풀이
// 나는 반복해서 빼줬고 강의는 나누는 방식으로 풀이

count = 0;
for (let i = 0; i < N; i++) {
  count += parseInt(K / arr[i]);
  K %= arr[i];
}

console.log(count);
