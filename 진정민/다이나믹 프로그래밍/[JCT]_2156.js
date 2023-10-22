// 풀이 방법을 오래 고민해봤는데 마땅히 떠오르지 않아
// 강의를 참고했습니다.
// 핵심은 와인잔이 늘어날 때 최대값을 구하는 경우의 수가 3가지라는 것 같습니다.
// 1. dp[i-1] = arr[i]가 추가 되기 전 최댓값이 arr[i-1],arr[i-2]을 연속적으로 사용했다는 가정
// 2. dp[i-2]+arr[i] = arr[i]가 추가 되기 전 최댓값이 arr[i-1], arr[i-2]을 연속적으로 사용했다는 가정
// 3. dp[i-3]+arr[i]+arr[i-1] = arr[i]가 추가 되기 전 최댓값이 arr[i-2]를 사용하지 않았다는 가정
// 결론. arr[i]가 추가 되기 전 최댓값인 dp[i-1]이 arr[i-1], arr[i-2]의 연속성의 경우의 수가
// xo, ox, oo가 있어 이 세 가지 경우의 수를 모두 고려해 최댓값을 구한다. 초기값 dp[1],dp[2],dp[3]이 있어서 가능

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);

let arr = [0];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let dp = new Array(n + 1).fill(0);

dp[1] = arr[1]; // ox
dp[2] = dp[1] + arr[2]; // oo
dp[3] = Math.max(arr[1] + arr[3], arr[2] + arr[3], arr[1] + arr[2]); // oxo, xoo, oox

for (let i = 4; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 2] + arr[i],
    dp[i - 3] + arr[i] + arr[i - 1]
  );
}

console.log(dp[n]);
