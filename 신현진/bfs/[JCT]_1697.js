//강의답안 봄
let fs = require("fs");
let [n, k] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

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

const max = 100001;
let visited = new Array(max).fill(0);

function bfs() {
  queue = new Queue();
  queue.enqueue(n);
  //큐가 빌 때까지 반복
  while (queue.getLength() != 0) {
    let current = queue.dequeue();
    //동생의 위치와 같다면 return
    if (current == k) return visited[current];
    //3가지 경우
    for (let next of [current - 1, current + 1, current * 2]) {
      //벗어날 경우에는 무시
      if (next < 0 || next >= max) continue;
      //아직 방문하지 않았다면
      if (visited[next] == 0) {
        //방문한 것으로 표시
        visited[next] = visited[current] + 1;
        queue.enqueue(next);
      }
    }
  }
}

console.log(bfs());
