// 24511 : queuestack

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

input = input.map((item) => item.split(" ").map(Number));

let N = input[0];
let A = input[1];
let B = input[2];
let M = input[3];
let C = input[4];
let arr = [];

let result = [];

// 큐를 구현하기 위해 스택인 인덱스를 제외하고 그냥 거꾸로 담아버렸습니다.
for (let i = N; i >= 0; i--) {
  if (A[i] === 0) {
    arr.push(B[i]);
  }
}

// 큐 arr에 queuestack에 삽입할 C수열을 push하고 pop을 구현하는 대신 앞에서부터 결과값을 옮겼다.
for (let i = 0; i < M; i++) {
  arr.push(C[i]);
  result[i] = arr[i];
}

console.log(result.join(" "));
