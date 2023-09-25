//강의답안 봄
//5214-환승

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

let [n, k, m] = input[0].split(" ").map(Number);

/*
let hyperInfo = [[]];
hyperInfo[0] = [];

for (let i = 1; i <= m; i++) {
  hyperInfo[i] = input[i].split(" ").map(Number);
}

let graph = [];

for (let i = 0; i <= n; i++) {
  graph[i] = [];
}

for (let i = 1; i <= m; i++) {
  let num = hyperInfo[i][0];
  let num2 = hyperInfo[i][1];
  for (let j = 1; j <= 2; j++) {
    let current = hyperInfo[i][j];
    graph[num].push(current);
    graph[current].push(num);

    if (num2 != current) {
      graph[num2].push(current);
      graph[current].push(num);
    }
  }
}

console.log(graph);
*/

//하이퍼튜브도 노드라고 간주
let graph = [];
for (let i = 1; i <= n + m; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let arr = input[i].split(" ").map(Number);
  for (let x of arr) {
    graph[x].push(n + i);
    graph[n + i].push(x);
  }
}

//항상 1번 노드에서 춟발
let visited = new Set([1]);
let queue = new Queue();
queue.enqueue([1, 1]); //[거리, 노드번호]
let found = false;

while (queue.getLength() != 0) {
  let [dist, now] = queue.dequeue();
  //n번 노드에 도착한 경우
  if (now == n) {
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
