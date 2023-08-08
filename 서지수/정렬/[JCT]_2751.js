// 3. 수 정렬하기 2

// 나의 풀이
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

console.log(arr.sort((a, b) => a - b).join("\n"));

// 강의 풀이
// 이 문제도 sort() 메서드를 이용해서 해결할 수 있다.
// sort()는 시간 복잡도 O(NlogN)을 보장
// 따라서, 본 문제에서는 N의 최대 크기가 100만 이라는 점에서 sort()로 문제를 해결할 수 있다.
// 본 문제는 시간 복잡도O(N^)의 정렬 알고리즘으로는 시간 초과를 받는다.
