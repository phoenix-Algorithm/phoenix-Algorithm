// 내 코드
// let fs = require('fs');
// let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
// let [n, k] = fs.readFileSync(path).toString().trim().split('\n').map(Number);
// let length = n * n;

// let start = 1;
// let result = 0;
// let end = length;
// let a = 0;
// let mid_value = 0;
// while (start <= end) {
//   let mid = parseInt((start + end) / 2);
//   let mid_length = mid * mid + (mid - 1) * 2;

//   if (a > Math.abs(mid_length - k) || a === 0) {
//     a = Math.abs(mid_length - k);
//     result = mid_length;
//     mid_value = mid;
//   }
//   if (mid_length < k) {
//     start = mid + 1;
//   } else if (mid_length === k) {
//     break;
//   } else {
//     end = mid - 1;
//   }
// }
// console.log(result);
// console.log(mid_value);
// for(let i = mid_value;i<mid_value+1;i++){
//   for(let j = mid_value;j<mid_value+1;j++){
//     // 여기서 막혔습니다,,,,
//   }
// }
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let fs = require('fs');
let input = fs.readFileSync(path).toString().split('\n');
let n = Number(input[0]); // 배열의 크기(N)
let k = Number(input[1]); // 인덱스 K
let start = 1; // 배열에 존재할 수 있는 가장 작은 값
let end = 10 ** 10; // 배열에 존재할 수 있는 가장 큰 값
let result = 0;
while (start <= end) {
  // 이진 탐색 수행(반복적)
  let mid = parseInt((start + end) / 2); // 현재의 중간점
  let total = 0; // mid보다 작거나 같은 데이터의 개수
  for (let i = 1; i <= n; i++) {
    // 각 행마다 계산
    total += Math.min(parseInt(mid / i), n);
  }
  if (total >= k) {
    // mid보다 작거나 같은 데이터의 개수가 k 이상이라면
    result = mid; // result에 기록
    end = mid - 1;
  }
  // mid보다 작거나 같은 데이터의 개수가 k 미만이라면
  else start = mid + 1;
}
console.log(result);
