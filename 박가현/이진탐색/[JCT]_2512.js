// 정답 코드
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [n, array, sum] = fs.readFileSync(path).toString().trim().split('\n');

array = array.split(' ').map(Number);
const arraySum = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
sum = Number(sum);
n = Number(n);
let end = Math.max(...array);
if (arraySum <= sum) {
  console.log(end);
} else {
  let start = 1; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
  let result = 0;
  while (start <= end) {
    // 이진 탐색 수행(반복문)
    let mid = parseInt((start + end) / 2); // 현재의 중간점(상한액)
    let total = 0; // 배정된 예산의 총액 계산
    for (x of array) {
      // 각 지방에서 요청한 예산을 하나씩 확인하며
      total += Math.min(mid, x); // 예산 배정
    }
    if (total <= sum) {
      // 조건을 만족한다면, 상한액(최대화가 목표)을 증가시키기
      result = mid;
      start = mid + 1;
    } else {
      // 조건을 만족하지 못한다면, 상한액을 감소시키기
      end = mid - 1;
    }
  }
  console.log(result);
}
