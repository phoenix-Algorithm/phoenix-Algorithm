let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const lectures = input[1].split(' ').map(Number);

function solution(N, M, lessons) {
  let start = Math.max(...lessons); // 강의들 중 가장 긴 길이
  let end = lessons.reduce((a, b) => a + b); // 모든 강의들의 총합

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = 0;
    let tempSum = 0;

    for (let i = 0; i < N; i++) {
      if (tempSum + lessons[i] > mid) {
        // 현재 누적된 합과 다음 강의를 더했을 때 mid보다 클 경우
        tempSum = 0;
        count++;
      }
      tempSum += lessons[i];
    }

    if (tempSum > 0) {
      // 마지막에 남은 강의가 있다면 count 추가
      count++;
    }

    if (count <= M) {
      // 만약 블루레이 개수가 M보다 작거나 같으면 범위 줄임
      end = mid - 1;
    } else {
      // 그렇지 않으면 범위 확장
      start = mid + 1;
    }
  }

  return start;
}

console.log(solution(n, m, lectures));
