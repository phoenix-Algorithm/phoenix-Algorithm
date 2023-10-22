let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fs = require("fs");
let input = fs.readFileSync(path).toString().trim().split("\n");

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

let [n, m] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  let row = input[i].split(" ").map(Number);
  graph.push(row);
}

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

function bfs() {
  let visited = [];
  for (let i = 0; i < n; i++) visited.push(new Array(m).fill(false));
  //왼쪽 위에서 출발
  visited[0][0] = true;
  let queue = new Queue();
  queue.enqueue([0, 0]);

  while (queue.getLength() != 0) {
    let [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (!visited[nx][ny]) {
        if (graph[nx][ny] >= 1) graph[nx][ny] += 1;
        else {
          //치즈가 없으면 탐색
          queue.enqueue([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
}

//치즈 녹이기
function melt() {
  //더 녹일 치즈가 없는지의 여부
  let finish = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      //녹일 치즈라면 녹이기
      if (graph[i][j] >= 3) {
        graph[i][j] = 0;
        finish = false;
      }
      //한 면만 닿은 치즈인 경우에는 무시한다
      else if (graph[i][j] == 2) graph[i][j] = 1;
    }
  }
  return finish;
}

let result = 0;
while (true) {
  bfs();
  if (melt()) {
    console.log(result);
    break;
  } else result += 1;
}
