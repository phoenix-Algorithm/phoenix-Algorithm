const fs = require('fs');
const data = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

const MOD = 10007;

function buildTower(blocksInfo) {
  const [numStudents, _, targetHeight] = blocksInfo[0];
  let dp = Array.from({ length: numStudents + 1 }, () => Array(targetHeight + 1).fill(0));

  // 아무 블록도 사용하지 않고 높이 0 만드는 경우의 수
  dp[0][0] = 1;

  for (let student = 1; student <= numStudents; student++) {
    // 해당 학생의 블록을 사용하지 않는 경우
    for (let height = 0; height <= targetHeight; height++) {
      dp[student][height] = (dp[student][height] + dp[student - 1][height]) % MOD;
    }

    const studentBlocks = blocksInfo[student];
    // 해당 학생의 블록을 사용하는 경우
    for (const blockHeight of studentBlocks) {
      for (let height = 0; height + blockHeight <= targetHeight; height++) {
        dp[student][height + blockHeight] = (dp[student][height + blockHeight] + dp[student - 1][height]) % MOD;
      }
    }
  }

  return dp[numStudents][targetHeight];
}

console.log(buildTower(data));
