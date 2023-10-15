const fs = require('fs');
let [N, ...soldiers] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

N = +N;
soldiers = soldiers[0].split(' ').map(Number);
// 4 2 5 8 4 11 15
soldiers.reverse();

function LIS(soldiers, N) {
  // dp[i]의 의미
  // i번째 병사까지 고려했을때 LIS의 길이
  // 모든 부분 수열은 최소 1의 길이를 가지기 때문에 1로 초기화 한다.
  const dp = new Array(N).fill(1);

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (soldiers[j] < soldiers[i]) {
        // j번째 병사가 i번째 병사보다 전투력이 낮기 때문에
        // j번째 병사까지 고려했을때 LIS 길이인 dp[j]에 1을 더해준 값과 현재 dp[i]중 큰 값으로 업데이트
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(soldiers.length - LIS(soldiers, N));
