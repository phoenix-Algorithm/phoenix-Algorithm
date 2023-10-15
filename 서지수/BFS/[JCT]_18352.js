// 3-2. 특정 거리의 도시 찾기

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

// 나의 풀이
// 문제에 나오는 예제는 다 맞는데 왜 틀리는지 모르겠음ㅜㅜㅜㅜㅜ
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().split('\n');

// const [N, M, K, X] = input[0].split(' ').map(Number);

// const arr = [];
// for (let i = 1; i <= N; i++) {
//   arr[i] = [];
// }

// for (let i = 1; i <= M; i++) {
//   let [x, y] = input[i].split(' ').map(Number);
//   arr[x].push(y);
// }
// let visited = new Array(N + 1).fill(false);
// visited[X] = true;

// let queue = new Queue();
// for (let x of arr[X]) {
//   queue.enqueue([X, x, 1]);
//   visited[x] = true;
// }

// const answer = [];

// while (queue.getLength() !== 0) {
//   let [A, B, dist] = queue.dequeue();
//   visited[B] = true;

//   if (dist === K) {
//     answer.push(B);
//   } else if (dist > K) {
//     break;
//   }

//   for (let nextNode of arr[B]) {
//     if (visited[nextNode] === false) {
//       queue.enqueue([B, nextNode, dist + 1]);
//     }
//   }
// }

// answer.sort((a, b) => a - b);

// if (answer.length !== 0) {
//   for (let a of answer) {
//     console.log(a);
//   }
// } else {
//   console.log(-1);
// }

// 강의 풀이
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, M, K, X] = input[0].split(' ').map(Number);

const arr = [];
for (let i = 1; i <= N; i++) {
  arr[i] = [];
}

for (let i = 1; i <= M; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  arr[x].push(y);
}

let distance = new Array(N + 1).fill(-1);
distance[X] = 0;

let queue = new Queue();
queue.enqueue(X);

while (queue.getLength() !== 0) {
  let now = queue.dequeue();

  for (let nextNode of arr[now]) {
    if (distance[nextNode] === -1) {
      distance[nextNode] = distance[now] + 1;
      queue.enqueue(nextNode);
    }
  }
}
let check = false;
for (let i = 1; i <= N; i++) {
  if (distance[i] === K) {
    console.log(i);
    check = true;
  }
}
if (!check) console.log(-1);
