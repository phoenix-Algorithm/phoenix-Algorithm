let fs = require("fs");
let [N, K] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

//1부터 K까지의 합
let sum = 0;
for (let i = 1; i < K + 1; i++) {
  sum += i;
}

//공의 개수가 부족한 경우
if (sum > N) {
  console.log(-1);
} else {
  //공의 개수에서 1부터 K까지의 합을 빼줌
  N -= sum;
  if (N % K == 0) console.log(K - 1);
  else console.log(K);
}

//최대한 연속해서 바구니에 공을 담기 때문에, 최댓값-최솟값은 항상 K-1 또는 K
