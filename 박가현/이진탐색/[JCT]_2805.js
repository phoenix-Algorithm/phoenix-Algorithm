let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [n, array] = fs.readFileSync(path).toString().trim().split('\n');

let M = Number(n.split(' ')[1]);
array = array.trim().split(' ').map(Number);
let start = 1;
let end = Math.max(...array);
let result = 0;
while (start <= end) {
  // 이진 탐색 수행(반복문)
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of array) {
    if (x > mid) {
      total += x - mid;
    }
  }
  if (total > M) {
    result = mid;
    start = mid + 1;
  } else if (total === M) {
    result = mid;
    break;
  } else {
    end = mid - 1;
  }
}
console.log(result);
