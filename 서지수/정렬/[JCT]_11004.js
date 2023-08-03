// 4. K번째 수

// 나의 풀이
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
let inputArr = input[1].split(" ").map(Number);

console.log(inputArr.sort((a, b) => a - b)[K - 1]);

// 강의 풀이
// 이 문제는 N의 최대 크기가 500만이라는 점에서 sort()로 문제를 해결할 수 있다.
