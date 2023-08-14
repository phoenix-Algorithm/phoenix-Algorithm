// 1946 : 신입 사원
// 처음에 이해했다고 생각하고 풀었는데.. 답이 나오질 않아
// 강의 코드로 이해했습니다.

let fs = require("fs");
let input = fs.readFileSync("index.txt").toString().trim().split("\n");

let testCase = Number(input[0]);
let line = 1;

for (let tc = 0; tc < testCase; tc++) {
  n = Number(input[line]);
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(" ").map(Number);
    arr.push(data);
  }

  arr.sort((x, y) => x[0] - y[0]);
  let count = 0;
  let minValue = 100001;
  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      count += 1;
    }
  }
  console.log(count);
  line += n + 1;
}
