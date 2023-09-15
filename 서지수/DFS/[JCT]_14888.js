// 6-2. 연산자 끼워넣기

// 강의 풀이
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const dfs = (index, value) => {
  if (index === N) {
    minValue = Math.min(minValue, value);
    maxValue = Math.max(maxValue, value);
    return;
  }
  if (add > 0) {
    add--;
    dfs(index + 1, value + nums[index]);
    add++;
  }
  if (sub > 0) {
    sub--;
    dfs(index + 1, value - nums[index]);
    sub++;
  }
  if (mul > 0) {
    mul--;
    dfs(index + 1, value * nums[index]);
    mul++;
  }
  if (div > 0) {
    div--;
    dfs(index + 1, ~~(value / nums[index]));
    div++;
  }
};

const N = Number(input[0]);
let nums = input[1].split(' ').map(Number);
let [add, sub, mul, div] = input[2].split(' ').map(Number);

let minValue = Infinity;
let maxValue = -Infinity;
dfs(1, nums[0]);

console.log(maxValue);
console.log(minValue);
