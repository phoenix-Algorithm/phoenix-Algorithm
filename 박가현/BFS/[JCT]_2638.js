// 내 코드
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}
// let fs = require('fs');
// let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
// let input = fs.readFileSync(path).toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// let graph = [];
// for (let i = 1; i <= n; i++) {
//   graph.push(input[i].split(' ').map(Number));
// }
// const check = (i, j) => {
//   if (i < 0 || i >= n || j < 0 || j >= n) return false;
//   if (graph[i][j] === 1 || graph[i][j] === 2) return true;
// };
// const checkC = (i, j) => {
//   if (i < 0 || i >= n || j < 0 || j >= n) return false;
//   if (graph[i][j] === 0) return true;
// };
// let day = 0;
// function bfs() {
//   queue = new Queue();
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (graph[i][j] === 1) {
//         queue.enqueue([i, j]);
//       } else {
//         if (
//           check(i - 1, j) &&
//           check(i + 1, j) &&
//           check(i, j - 1) &&
//           check(i, j + 1)
//         ) {
//           // 모두 다 true 모두 다 치즈 , 치즈 내부 공간
//           graph[i][j] = 2;
//         }
//       }
//     }
//   } //치즈내부공간 확인
//   if (queue.getLength() === 0) {
//     return;
//   } //치즈가 아예 없음
//   const array = [];
//   while (queue.getLength() != 0) {
//     let [i, j] = queue.dequeue();
//     count = 0;
//     if (checkC(i - 1, j)) {
//       count++;
//     }
//     if (checkC(i + 1, j)) {
//       count++;
//     }
//     if (checkC(i, j - 1)) {
//       count++;
//     }
//     if (checkC(i, j + 1)) {
//       count++;
//     }

//     if (count >= 2) {
//       array.push([i, j]);
//     }
//   } // 외부 공간에 두 변 접해있는 치즈 확인
//   day++;
//   for (let ar of array) {
//     const [a, b] = ar;
//     graph[a][b] = 0;
//   }
//   bfs();
// }
// bfs();
// console.log(day);
// 정답 코드
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n'); // 맵의 크기(N과 M) 정보 입력
let [n, m] = input[0].split(' ').map(Number);
let graph = []; // 2차원 맵 입력받기
for (let i = 1; i <= n; i++) {
  let row = input[i].split(' ').map(Number);
  graph.push(row);
}
// 상, 하, 좌, 우 방향 정보
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
function bfs() {
  let visited = []; // 방문 처리 배열
  for (let i = 0; i < n; i++) visited.push(new Array(m).fill(false));
  visited[0][0] = true; // 제일 왼쪽 위에서 출발
  let queue = new Queue(); // 너비 우선 탐색(BFS) 수행
  queue.enqueue([0, 0]);
  while (queue.getLength() != 0) {
    // 큐가 빌 때까지 반복하기
    let [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      // 맵을 벗어나는 경우 무시
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (!visited[nx][ny]) {
        if (graph[nx][ny] >= 1) graph[nx][ny] += 1; // 카운트 증가
        else {
          queue.enqueue([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
}
function melt() {
  let finish = true; // 더 녹일 치즈가 없는지 여부
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] >= 3) {
        // 녹일 치즈라면
        graph[i][j] = 0; //녹이기
        finish = false;
      } else if (graph[i][j] == 2) graph[i][j] = 1; // 한 면만 닿은 경우 무시
    }
  }
  return finish;
}
let result = 0;
while (true) {
  bfs();
  if (melt()) {
    console.log(result); // 전부 녹았다면
    break;
  } else result += 1;
}
