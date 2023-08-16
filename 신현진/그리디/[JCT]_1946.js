let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

//강의 답안 봄
let line = 1;
let T = Number(input[0]);

for (let i = 0; i < T; i++) {
  n = Number(input[line]);
  let arr = [];
  for (let j = line + 1; j <= line + n; j++) {
    let data = input[j].split(" ").map(Number);
    arr.push(data);
  }
  arr.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let minValue = 1000000;
  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      count += 1;
    }
  }
  console.log(count);
  line += n + 1;
}
