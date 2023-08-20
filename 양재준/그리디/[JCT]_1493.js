const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [box, N, ...cubeList] = input;
let [length, width, height] = box.split(' ').map(Number);

/* 강의 풀이 */
// 2의 n승으로 나누어지는 수 중 가장 큰 수
function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) {
    i++;
  }
  return i - 1;
}

let cubes = Array(20).fill(0);

for (let i = 0; i < N; i++) {
  const [cube, count] = cubeList[i].split(' ').map(Number);
  cubes[cube] = count;
}

// sizeL, sizeW, sizeH 중 가장 작은 값
let size = 19;
size = Math.min(size, nearestSquare(length));
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let count = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
  used *= 8;
  cur = 2 ** i;

  // 현재 큐브로 만들 수 있는 최대 큐브의 개수
  let required = Math.floor(length / cur) * Math.floor(width / cur) * Math.floor(height / cur) - used;

  // 현재 큐브로 만들 수 있는 최대 큐브의 개수와 현재 큐브의 개수 중 작은 값
  let usage = Math.min(required, cubes[i]);
  count += usage;
  used += usage;
}

if (used === length * width * height) {
  console.log(count);
} else {
  console.log(-1);
}
