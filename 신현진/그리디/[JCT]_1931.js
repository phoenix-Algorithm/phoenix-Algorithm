let fs = require("fs");
let [N, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

N = +N;
input = input.map((v) => v.split(" ").map(Number));

//강의 답안 봄

input.sort(function (a, b) {
  //종료시점이 다른 경우에는 종료 시점이 빠른 것이 앞에 오도록 함
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

console.log(input);

let cnt = 1,
  cur = 0; //첫 번째 회의부터 확인
for (let i = 1; i < N; i++) {
  if (input[cur][1] <= input[i][0]) {
    cur = i; //다음 회의로 갱신
    cnt += 1;
  }
}

console.log(cnt);
