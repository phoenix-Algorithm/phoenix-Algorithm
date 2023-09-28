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

let [n, k, m] = input[0].split(" ").map(Number);
let graph = [];

//   for(let i = 0; i<=n; i++){
//     graph[i] = [];
//   }

//   for(let i = 0; i<m; i++){
//     let arr = input[i+1].split(' ').map(Number)

//     for(let x of arr){

//     }
//   }

//   console.log(graph)

//   let visited = new Array(n+1).fill(false)

//   queue = new Queue()
//   queue.enqueue([1,1])

//   while(queue.getLength() != 0){
//     let [t,x] = queue.dequeue()

//     if(visited[x]) continue

//     if(x == n){
//       console.log(t)
//       break
//     }

//     visited[x] = true

//     for(let s of graph[x]){
//         queue.enqueue([t+1,s])
//     }
//   }

for (let i = 1; i <= n + m; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let arr = input[i].split(" ").map(Number);
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
