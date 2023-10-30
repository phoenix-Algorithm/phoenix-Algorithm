// 가장 긴 증가하는 부분 수열
// 이전에 강의에서 풀었던 풀이 참고했습니다
// 가장 긴 증가하는 부분 수열은 풀이가 거의 비슷한가보네요...
// 조금은 외워야겠습니다...

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = input[1].split(' ').map(Number);

arr.reverse();

let dp = new Array(N).fill(1);

// 가장 긴 증가하는 부분 수열(LIS) 알고리즘 수행
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    // console.log('i: ', i, 'j: ', j);
    // console.log(arr[i], arr[j]);
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
// console.log(dp);

console.log(N - Math.max(...dp));
