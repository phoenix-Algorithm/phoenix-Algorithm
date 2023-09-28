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
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let fs = require("fs");
let input = fs.readFileSync("dev/stdin.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let graph = [];

for (let i = 0; i < n; i++) {
  graph[i] = input[i + 1].split(" ").map(Number);
}

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

// 일단 전체를 순회하여 1 만나면 2변이상 0인지 체크
// 2변이상 0이면 일단 2로 바꾸고
// 다시 전체를 순회하여 2를 0으로 바꿈 => 시간 + 1시간
// 다시 반복 1이 없어질 때까지 반복
// let dx = [-1, 0, 1, 0];
// let dy = [0, 1, 0, -1];

// function checkAround(x,y){
//   let count = 0
//   for (let i = 0; i < 4; i++) {
//     let nx = x + dx[i];
//     let ny = y + dy[i];

//     if (0 <= nx && nx < n && 0 <= ny && ny < m) {
//       if(graph[nx][ny] == 0){
//         count++
//       }
//     }
//   }
//   if(count >= 2) return 2
//   else return 1
// }

// let valued = true
// let answer = 0

// while(valued){
//   for(let i =0; i<n; i++){
//     for(let j = 0; j<m; j++){
//       if(graph[i][j] == 1 ){
//         graph[i][j] = checkAround(i,j)
//       }
//     }
//   }

//   for(let i = 0; i<n; i++){
//     console.log(graph[i].join(''))
//   }

//   valued = false

//   for(let i =0; i<n; i++){
//     for(let j = 0; j<m; j++){
//       if(graph[i][j] == 2 ){
//         valued = true
//         graph[i][j] = 0
//       }
//     }
//   }

//   for(let i = 0; i<n; i++){
//     console.log(graph[i].join(''))
//   }

//   answer++
// console.log(answer)
// }
