let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);

// 정렬
arr.sort((a, b) => a - b);

// 모든 요청이 배정 가능한지 처리
let sum = 0;

for (let i = 0; i < n; i++) {
  sum += arr[i];
}

if (sum < m) console.log(arr[n - 1]);
else {
  // 모던 요청을 배정할 수 없는 경우
  let start = 1;
  let end = arr[n - 1];

  let answer = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (x of arr) {
      total += Math.min(mid, x);
    }
    if (total <= m) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(answer);
}
