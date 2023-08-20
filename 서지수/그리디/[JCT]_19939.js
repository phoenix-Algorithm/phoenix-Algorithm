// 4-1. 박 떠뜨리기

// 내 풀이
let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [N, K] = input[0].split(" ").map(Number);

// let basket = new Array(K).fill(0);
// let start = 0;
// while (N > 0) {
//   console.log("남은 공의 개수: ", N);
//   console.log("공을 담을 바스킷 번호: ", start);
//   for (let i = start; i < K; i++) {
//     if (N > 0) {
//       basket[i]++;
//       N--;
//     }
//     console.log(basket);
//   }
//   if (start === K - 1) {
//     start--;
//     K -= 1;
//   } else {
//     start++;
//   }
// }

// console.log("결과: ", basket);

// 강의 풀이
// 규칙을 찾는게 중요
// 조건만 만족한다면 항상 정답은 k-1 또는 k이다.
// N이 너무 작으면 조건에 만족될 수 없고 N이 충분히 커야한다.
// (1+2+..+K까지 합이 N보다 작거나 같은 경우만 조건 만족, 1+2+..+K <= N)

let summary = 0; // 1부터 K까지의 합
for (let i = 1; i < K + 1; i++) {
  summary += i;
}

if (summary > N) {
  // 공의 개수가 부족한 경우
  console.log(-1);
} else {
  // 공의 개수가 충분한 경우
  N -= summary;
  if (N % K == 0) console.log(K - 1);
  else console.log(K);
}
