// 10814 나이순정렬

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
  [a, b] = input[i].split(" ");
  arr.push([Number(a), b, i]);
}

function compare(a, b) {
  if (a[0] === b[0]) {
    return a[2] - b[2];
  } else {
    return a[0] - b[0];
  }
}

arr.sort(compare);

answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i][0] + " " + arr[i][1] + "\n";
}

console.log(answer);
