// 4-3. 박스 채우기

// 강의 풀이
let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

// x보다 작거나 같으면서 가장 가까운 2^i를 찾는 함수
function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i += 1;
  return i - 1;
}

let [length, width, height] = input[0].split(" ").map(Number);
let cubes = Array(20).fill(0);

let n = Number(input[1]);
for (let i = 2; i <= n + 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  cubes[a] = b;
}

let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
  used *= 8; // 채널, 너비, 높이가 2씩 줄었으므로 규브의 개수는 8배 증가
  cur = 2 ** i; // 현재의 정육면제 큐브의 길이
  // 채워넣어야할 큐브의 개숙 계산
  let required =
    parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) -
    used;

  let usage = Math.min(required, cubes[i]); // 이번 단계에서 넣을 수 있는 큐브의 개수
  res += usage;
  used += usage;
}

if (used == length * width * height) console.log(res); // 박스를 가득 채운 경우
else console.log(-1); // 박스를 가득 채우지 못한 경우
