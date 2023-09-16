const fs = require('fs');
let [K, ...input] = fs.readFileSync('dev/stdin').toString().split('\n');
K = Number(K);

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
const [NO_GROUP, GROUP1, GROUP2] = [0, 1, 2];
function bfs(graph, group, length) {
  const queue = new Queue();
  for (let i = 1; i < length; i++) {
    if (group[i] === NO_GROUP) {
      queue.enqueue(i);
      group[i] = GROUP1;

      while (queue.getLength() != 0) {
        const node = queue.dequeue();
        const neighborGroup = group[node] === GROUP1 ? GROUP2 : GROUP1;

        for (const neighbor of graph[node]) {
          if (group[neighbor] === NO_GROUP) {
            queue.enqueue(neighbor);
            group[neighbor] = neighborGroup;
          } else if (group[neighbor] !== neighborGroup) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

let index = 0;
for (let i = 0; i < K; i++) {
  const [V, E] = input[index].split(' ').map(Number);
  const graph = Array.from(Array(V + 1), () => new Array());
  const group = Array(V + 1).fill(0);

  for (let j = 1; j <= E; j++) {
    const [x, y] = input[index + j].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  console.log(bfs(graph, group, V) ? 'YES' : 'NO');
  index += E + 1;
}
