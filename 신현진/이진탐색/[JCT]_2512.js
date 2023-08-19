let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let N = +input[0];
/*let request = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
//총 예산
let sum = +input[2];

//넘는지 안넘는지를 위한 계산
let cost = sum;

for (let i = 0; i < request.length; i++) {
  cost -= request[i];
}

//평균보다 큰 값들중 가장 최소의 인덱스를 찾기
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt(start + end) / 2;
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

//평균값
let avg = Math.floor(request.reduce((a, b) => a + b) / N);

//만약에 총 예산과 딱 맞아떨어지거나 좀 남는다면 그대로 최댓값을 출력
if (cost >= 0) console.log(Math.max(...request));
//총 예산이 모자란 경우
else {
  //평균보다 큰 수들 중 최솟값의 인덱스
  let idx = upperBound(request, avg, 0, request.length);
  //request의 길이만큼 반복
  for (let j = 0; j < request.length; j++) {
    //idx이전까지의 값들 = 평균보다 작은 값들이므로 sum에서 그냥 빼줌
    if (j < idx) {
      sum -= request[j];
    } else {
      //idx부터 그 후까지의 값들
      //상한액=남은 sum/남은 request
      let lim = Math.floor(sum / (request.length - idx));
      //해당 값을 상한액으로 변경
      request[j] = lim;
    }
  }
  console.log(Math.max(...request));
}
*/
let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);

let start = Math.min(...arr);
let end = Math.max(...arr);

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) {
    total += Math.min(mid, x);
  }
  if (total <= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
