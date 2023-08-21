const fs = require('fs');
let [N, soldiers] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

N = Number(N);
soldiers = soldiers.split(' ').map(Number);

// lower bound
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

soldiers.reverse();
const LIS = [soldiers[0]];

for (let i = 1; i < N; i++) {
  if (soldiers[i] > LIS[LIS.length - 1]) {
    LIS.push(soldiers[i]);
  } else {
    let idx = lowerBound(LIS, soldiers[i], 0, LIS.length);
    LIS[idx] = soldiers[i];
  }
}

console.log(N - LIS.length);
