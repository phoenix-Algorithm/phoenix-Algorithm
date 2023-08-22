// 1-1. 예산

// 나의 풀이
const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const budget = Number(input[2]);

const sum = arr.reduce((a, b) => a + b);
// 요청 예산의 합이 실제 예산보다 큰지 판단
if (sum > budget) {
  let limit = parseInt(sum / N);
  // 배정 금액이 실제예산보다 작아질 때까지 반복
  while (1) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < limit) {
        temp += arr[i];
      } else {
        temp += limit;
      }
    }
    // 배정 예산이 실제예산보다 작은지 판단
    if (temp < budget) {
      // 작으면 상한을 출력하고 끝냄
      console.log(limit);
      break;
    } else {
      // 크면 상한액을 줄임
      limit -= 1;
    }
  }
} else {
  // 요청 예산의 합이 실제 예산보다 작으면 최대 배정 예산 출력
  console.log(Math.max(...arr));
}

// 강의 풀이
/* 
이진 탐색으로 푸는 방법을 모르겠어서 그냥 풀어봤는데
가운데 값에서 상한액을 줄여가는 것만 생각하고 더 늘리는 것은 생각을 못해서 틀림
왜 이진 탐색으로 풀어야하는지 이해하게 되었다
*/

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  // 이진 탐색 수행
  let mid = parseInt((start + end) / 2); // 상한액
  let total = 0; // 배정된 예산의 총액 계산
  for (x of arr) {
    total += Math.min(mid, x);
  }
  if (total <= budget) {
    // 조건을 만족하면 상한액을 증가 시키기 (상한액 최대화하기 위해서)
    result = mid;
    start = mid + 1;
  } else {
    // 조건을 만족하지 못한다면, 상한액 감소
    end = mid - 1;
  }
}
console.log(result);
