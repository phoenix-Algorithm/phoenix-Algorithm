// 5-2. A -> B

// 강의 풀이
/* 
    전에 BFS를 이용하지 않고 풀었었는데 BFS로 풀려니 어렵네요....
    근데 또 막상 답안 풀이 보니까 꽤 쉽네요...(땀땀)
*/

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

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [A, B] = input[0].split(' ').map(Number);
let queue = new Queue();
queue.enqueue([A, 0]);
let visited = new Set();
let found = false;

while (queue.getLength() !== 0) {
  let [value, dist] = queue.dequeue();
  if (value > 1e9) continue; // 조건에서 제시된 값인 10^9(10억)을 넘는다면 무시
  if (value === B) {
    console.log(dist + 1);
    found = true;
    break;
  }
  for (let oper of ['*', '+']) {
    let nextValue = value;
    if (oper === '*') nextValue *= 2;
    if (oper === '+') {
      nextValue *= 10;
      nextValue += 1;
    }
    if (!visited.has(nextValue)) {
      queue.enqueue([nextValue, dist + 1]);
      visited.add(nextValue);
    }
  }
}

if (!found) console.log(-1);
