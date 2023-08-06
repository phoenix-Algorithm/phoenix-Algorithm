// 11650 좌표 정렬하기

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
  [a, b] = input[i].split(" ").map(Number);
  arr.push([a, b]);
}

function compare(a, b) {
  if (a[0] != b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
}

arr.sort(compare);

let answer = "";

for (let i = 0; i < arr.length; i++) {
  answer += arr[i][0] + " " + arr[i][1] + "\n";
}

console.log(answer);
