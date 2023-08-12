let fs = require("fs");
/**맨 마지막 예제 틀림 
 * 가장 큰 크기의 큐브부터 채우기
let [box, n, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input.map((line) => line.split(" ").map(Number));

//박스 크기
let v = box.split(" ").reduce((a, b) => a * b);

let cube = [];
let pow = 1;
for (let i = 0; i < n; i++) {
  cube.push([arr[i][1], Math.pow(pow, 3)]);
  pow = 2 * pow;
}

let i = cube.length - 1;
let count = 0;

while (v > 0 && i >= 0) {
  if (v >= cube[i][1]) {
    v -= cube[i][1];
    count++;
    cube[i][0]--;
    if (cube[i][0] == 0) i--;
  } else {
    i--;
  }
}

//v는 남았지만 큐브가 맞지 않는 경우
if (v > 0) {
  count = -1;
}

console.log(count);
*/

//강의 답안
let input = fs.readFileSync("./input.txt").toString().split("\n");

//x보다 작거나 같으면서 가장 가까운 2^i 를 찾는 함수
function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i += 1;
  return i - 1;
}

let length = Number(input[0].split(" ")[0]);
let width = Number(input[0].split(" ")[1]);
let height = Number(input[0].split(" ")[2]);

//2^19개의 큐브가 들어올 수 있음
let cubes = Array(20).fill(0);

let n = Number(input[1]);

//큐브 개수 채워넣기
for (let i = 2; i <= n + 1; i++) {
  let a = Number(input[i].split(" ")[0]);
  let b = Number(input[i].split(" ")[1]);
  cubes[a] = b;
}

let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0;
let used = 0;

//큰 것부터 작은 것 까지
for (let i = size; i >= 0; i--) {
  //length, width, height가 2씩 줄었기 때문에 큐브의 개수는 8배 증가
  used *= 8;
  //현재의 정육면체 큐브의 길이
  cur = 2 ** i;

  let required =
    parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) -
    used;

  //이번 단계에서 넣을 수 있는 큐브의 개수
  let usage = Math.min(required, cubes[i]);
  res += usage;
  used += usage;
}

if (used == length * width * height) console.log(res);
else console.log(-1);
