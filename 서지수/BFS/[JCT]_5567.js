// 4-2. 결혼식
// 오래 걸렸지만 푸니까 신나네요

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  // 원소 삽입
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  // 원소 삭제
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  // 원소 조회
  peek() {
    return this.items[this.headIndex];
  }
  // 큐 길이 구하기
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const n = Number(input[0]);
const m = Number(input[1]);
const graph = Array.from(Array(n + 1), () => new Array());
for (let i = 2; i < m + 2; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let queue = new Queue();
queue.enqueue([0, 1]);

const visited = new Array(n).fill(false);
visited[1] = true;

let answer = 0;

while (queue.getLength() !== 0) {
  const [dist, now] = queue.dequeue();
  if (dist !== 0 && dist <= 2) {
    answer++;
  }

  for (i of graph[now]) {
    if (!visited[i]) {
      queue.enqueue([dist + 1, i]);
      visited[i] = true;
    }
  }
}

console.log(answer);
