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
// 내 코드
// let fs = require('fs');
// let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
// let input = fs.readFileSync(path).toString().trim().split('\n');
// const [n, k, m] = input[0].split(' ').map(Number);
// let visited = new Set([1]);
// let graph = [];

// for (let i = 1; i <= m; i++) {
//   let ar = input[i].split(' ').map(Number);
//   for (let a of ar) {
//     if (graph[a]) {
//       graph[a] = new Set([...graph[a], ...ar]);
//     } else {
//       graph[a] = new Set(ar);
//     }
//   }
// }
// function bfs() {
//   queue = new Queue();
//   queue.enqueue([1, 1]);
//   visited[1] = 1;
//   while (queue.getLength() != 0) {
//     let [dist, v] = queue.dequeue();
//     if (v === n) {
//       return dist;
//     }
//     for (let c of graph[v]) {
//       if (!visited.has(c)) {
//         queue.enqueue([dist + 1, c]);
//         visited.add(c);
//       }
//     }
//   }
// }
// const answer = bfs();
// if (answer === undefined) {
//   console.log(-1);
// } else {
//   console.log(answer);
// }
// 정답 코드
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let [n, k, m] = input[0].split(' ').map(Number);
// 그래프 정보(N개의 역과 M개의 하이퍼튜브는 모두 노드)
let graph = [];
for (let i = 1; i <= n + m; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let arr = input[i].split(' ').map(Number);
  for (let x of arr) {
    graph[x].push(n + i); // 노드 → 하이퍼 튜브
    graph[n + i].push(x); // 하이퍼 튜브 → 노드
  }
}
let visited = new Set([1]); // 1번 노드에서 출발
let queue = new Queue();
queue.enqueue([1, 1]); // [거리, 노드 번호]
let found = false;
while (queue.getLength() != 0) {
  // 큐가 빌 때까지 반복하기
  let [dist, now] = queue.dequeue();
  // N번 노드에 도착한 경우
  if (now == n) {
    // 절반은 하이퍼 튜브
    console.log(parseInt(dist / 2) + 1);
    found = true;
    break;
  }
  for (let y of graph[now]) {
    // 인접 노드를 하나씩 확인
    if (!visited.has(y)) {
      // 아직 방문하지 않았다면
      queue.enqueue([dist + 1, y]); // 방문 처리
      visited.add(y);
    }
  }
}
if (!found) console.log(-1); // N번 노드에 도달 불가능
