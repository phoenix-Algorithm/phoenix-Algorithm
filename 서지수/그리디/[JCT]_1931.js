// 3-2. 회의실 배정

// 강의 풀이
let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[1] != b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let cnt = 1;
let cur = 0;
for (let i = 1; i < N; i++) {
  if (arr[cur][1] <= arr[i][0]) {
    cur = i;
    cnt += 1;
  }
}

console.log(cnt);
