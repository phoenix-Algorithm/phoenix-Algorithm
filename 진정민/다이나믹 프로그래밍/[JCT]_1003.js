// 처음에 그냥 하향식으로 print("0") 대신 count0++ 이런식으로 풀었는데 시간 초과 나서
// 상향식으로 바꿔서 dx에 담아 풀었습니다.

let fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().split("\n");

let t = Number(input[0]);
let max = 0;

// 메모리 낭비를 최소화 시키기 위해 가장 큰 값을 구해 그 값까지 구하도록 했습니다.
for (let i = 1; i <= t; i++) {
  max = Math.max(max, Number(input[i]));
}

// 초기값
let dx = [
  [1, 0],
  [0, 1],
  [1, 1],
];

for (let i = 3; i <= max; i++) {
  x = dx[i - 1][0] + dx[i - 2][0];
  y = dx[i - 1][1] + dx[i - 2][1];
  dx.push([x, y]);
}

let i = 1;

while (t--) {
  console.log(dx[Number(input[i++])].join(" "));
}
