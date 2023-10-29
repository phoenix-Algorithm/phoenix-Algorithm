const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
    else start = mid + 1;
  }
  return end;
}

const array = input[1].split(' ').map(Number);

const result = [array[0]];
for (let i = 1; i < array.length; i++) {
  let num = array[i];
  if (result[result.length - 1] < num) result.push(num);
  else {
    const index = lowerBound(result, num, 0, result.length);
    result[index] = num;
  }
}
console.log(result.length);
