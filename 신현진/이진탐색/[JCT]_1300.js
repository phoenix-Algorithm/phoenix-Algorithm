//강의답안 봄

let fs = require("fs");
let [n, k] = fs.readFileSync("./input.txt").toString().trim().split("\n");
n = +n;
k = +k;

/*let a = [];

let idx = 0;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    a[idx] = i * j;
    idx++;
  }
}

console.log(a.sort()[k - 1]);*/

//배열에 존재할 수 있는 가장 작은 값
let start = 1;
//배열에 존재할 수 있는 가장 큰 값
let end = 10 ** 10;

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  //mid보다 작거나 같은 데이터의 개수
  let total = 0;
  //각 행마다 계산
  for (let i = 1; i <= n; i++) {
    total += Math.min(parseInt(mid / i), n);
  }
  //mid보다 작거나 같은 데이터의 개수가 k 이상이라면
  if (total >= k) {
    result = mid;
    end = mid - 1;
  } else start = mid + 1;
}

console.log(result);
