// 상근이의 여행

const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

// 블로그 풀이
// https://kortlog.tistory.com/entry/백준9372번-상근이의-여행-with-Nodejs

let [T, ...arr] = input.map((v) => v.split(" ").map(Number));
answer = [];

for (let i = 0; i < T; i++) {
  const N = arr[0][0];
  const M = arr[0][1];
  arr.shift();

  for (let j = 0; j < M; j++) {
    arr.shift();
  }

  answer.push(N - 1);
}

console.log(answer.join("\n"));

// 문제 풀이를 어떻게 해야할지도 이해 못했지만
// 입력문 중간에 있는 N, M을 구하는 방법도 못했는데
// shift()로 빼주면서 하면 된다는 것을 알게되었다.

// 문제 풀이는 어려운 풀이 과정이 필요한게 아니라
// 국가의 수 - 1를 구하면 N개의 국가를 여행하기 위한 최소를 구할 수 있다.
