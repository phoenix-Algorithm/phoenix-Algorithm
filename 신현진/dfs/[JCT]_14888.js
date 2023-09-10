//강의답안 봄
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let n = +input[0];
let arr = input[1].split(" ").map(Number);
let [add, sub, mul, div] = input[2].split(" ").map(Number);

let minValue = Infinity;
let maxValue = -Infinity;

function dfs(index, value) {
  if (index == n) {
    minValue = Math.min(minValue, value);
    maxValue = Math.max(maxValue, value);
    return;
  }
  if (add > 0) {
    add--;
    dfs(index + 1, value + arr[index]);
    add++;
  }
  if (sub > 0) {
    sub--;
    dfs(index + 1, value - arr[index]);
    sub++;
  }
  if (mul > 0) {
    mul--;
    dfs(index + 1, value * arr[index]);
    mul++;
  }
  if (div > 0) {
    div--;
    dfs(index + 1, ~~(value / arr[index]));
    div++;
  }
}

dfs(1, arr[0]);

console.log(maxValue);
console.log(minValue);
