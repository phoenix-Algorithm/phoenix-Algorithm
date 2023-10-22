// 4-1. 환승
/* 
    하이퍼튜브를 노드로 생각하는게 어렵네요 
    문제 풀이 1, 2, 3을 안풀고 풀려니 개념이 잘 이해가 안되네요..
*/

// 강의 풀이
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

const [N, L, M] = input[0].split(' ').map(Number);
const graph = [];

for (let i = 1; i <= N + M; i++) graph[i] = [];
for (let i = 1; i <= M; i++) {
  let arr = input[i].split(' ').map(Number);
  for (let x of arr) {
    graph[x].push(N + i);
    graph[N + i].push(x);
  }
}

let visited = new Set([1]);
let queue = new Queue();
queue.enqueue([1, 1]); // [거리, 노드 번호]
let found = false;

while (queue.getLength() !== 0) {
  let [dist, now] = queue.dequeue();
  if (now == N) {
    console.log(parseInt(dist / 2) + 1);
    found = true;
    break;
  }
  for (let y of graph[now]) {
    if (!visited.has(y)) {
      queue.enqueue([dist + 1, y]);
      visited.add(y);
    }
  }
}

if (!found) console.log(-1);
