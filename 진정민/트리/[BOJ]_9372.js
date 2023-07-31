const [T, ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let arr = input.splice(0);
let result = [];

for (let i = 0; i < T; i++) {
  let N = arr[0][0];
  let M = arr[0][1];
  arr.shift();

  for (let j = 0; j < M; j++) {
    arr.shift();
  }

  result.push(N - 1);
}

console.log(result.join("\n"));
