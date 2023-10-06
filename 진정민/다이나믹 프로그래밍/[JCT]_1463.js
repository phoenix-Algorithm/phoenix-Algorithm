// 메모리나 시간 초과가 날 것 같았는데
// 안 나서 그냥 제출했습니다.. 예쁘게 풀지 못해 좀 아쉽네요

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);

if (n == 1) {
  console.log(0);
} else {
  let dp = [];
  dp.push([n]);

  let dist = 0;

  let toggle = true;

  while (toggle) {
    let arr = [];

    dp[dist + 1] = [];
    for (let i = 0; i < dp[dist].length; i++) {
      if (dp[dist][i] == 1) toggle = false;
      if (dp[dist][i] % 3 == 0) dp[dist + 1].push(dp[dist][i] / 3);
      if (dp[dist][i] % 2 == 0) dp[dist + 1].push(dp[dist][i] / 2);
      dp[dist + 1].push(dp[dist][i] - 1);
    }
    dist++;
  }

  console.log(dp.length - 2);
}
