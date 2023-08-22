let fs = require("fs");
let [tree, height] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

tree = tree.split(" ");
height = height.split(" ").map(Number);

let N = +tree[0];
let M = +tree[1];

let start = 0;
let end = Math.max(...height);

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  let arr = height.map((v) => v - mid);

  for (x of arr) {
    if (x > 0) {
      total += x;
    }
  }
  if (total >= M) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
