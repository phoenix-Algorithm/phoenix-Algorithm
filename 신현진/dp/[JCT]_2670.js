//강의답안 봄
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

//연속적으로 보면 되기 때문에
//이전 것과 곱할지/곱하지 않을지에 따라 dp 테이블 갱신
for (let i = 1; i < n; i++) {
  input[i] = Math.max(input[i], input[i] * input[i - 1]);
}

//console.log(input);
console.log(Math.max(...input).toFixed(3));
