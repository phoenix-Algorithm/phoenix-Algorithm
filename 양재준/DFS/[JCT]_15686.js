const fs = require('fs');
let [NM, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [N, M] = NM.split(' ').map(Number);
input = input.map((v) => v.split(' ').map(Number));

const map = Array.from(Array(N), () => Array(N).fill(0));
const chicken = [];
const house = [];

// input값을 map에 저장하고, 치킨집과 집의 좌표를 저장한다.
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    map[i][j] = input[i][j];
    if (map[i][j] === 1) house.push([i, j]);
    else if (map[i][j] === 2) chicken.push([i, j]);
  }
}

const visited = Array(chicken.length).fill(false);
let min = Infinity;

// 치킨집을 M개 고르는 모든 경우의 수
function dfs(index, count) {
  if (count === M) {
    // 치킨거리의 최소값을 갱신
    const distance = getDistance();
    min = Math.min(min, distance);
    return;
  }

  for (let i = index; i < chicken.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(i, count + 1);
      visited[i] = false;
    }
  }
}

function getDistance() {
  let distance = 0;

  for (let i = 0; i < house.length; i++) {
    const [x1, y1] = house[i];
    let minDistance = Infinity;

    for (let j = 0; j < chicken.length; j++) {
      if (visited[j]) {
        const [x2, y2] = chicken[j];
        const temp = Math.abs(x1 - x2) + Math.abs(y1 - y2);
        // 치킨거리의 최소값
        minDistance = Math.min(minDistance, temp);
      }
    }
    // 도시의 치킨거리
    distance += minDistance;
  }
  return distance;
}

dfs(0, 0);
console.log(min);
