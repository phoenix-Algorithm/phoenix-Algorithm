const [T, ...input] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
let arr = input.splice(0);
let result = [];

console.log(arr);

for (let i = 0; i < T; i++) {
  //나라 개수
  let N = arr[0][0];
  //비행기 개수
  let M = arr[0][1];
  arr.shift();

  for (let j = 0; j < M; j++) {
    arr.shift();
  }

  result.push(N - 1);
}

console.log(result.join("\n"));
