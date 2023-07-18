let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let testCase = ~~input[0];

for (let i = 1; i <= testCase; i++) {
  let data = input[i].split(" ").map(Number);
  let num = data.shift();
  let sum = data.reduce((a, b) => a + b);
  let avg = sum / num;

  let stdNum = 0;
  for (let j = 0; j <= num; j++) {
    if (data[j] > avg) stdNum += 1;
  }

  console.log(`${((stdNum / num) * 100).toFixed(3)}%`);
}
