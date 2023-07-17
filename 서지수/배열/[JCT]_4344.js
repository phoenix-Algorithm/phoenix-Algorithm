// 4. 평균은 넘겠지

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("input.txt").toString().split("\n");

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  const count = Number(input[i].split(" ")[0]);
  const array = input[i]
    .split(" ")
    .slice(1, count + 1)
    .map(Number);
  const avg = array.reduce((a, b) => a + b) / count;
  let high = 0;
  for (let j = 0; j < count; j++) {
    if (array[j] > avg) {
      high += 1;
    }
  }
  console.log(`${((high / count) * 100).toFixed(3)}%`);
}
