let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

let start = 1;
let end = arr[n - 1];

let answer = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) {
    if (x < mid) continue;
    total += parseInt(x / mid);
  }
  if (total < k) {
    end = mid - 1;
  } else {
    answer = mid;
    start = mid + 1;
  }
}
console.log(answer);
