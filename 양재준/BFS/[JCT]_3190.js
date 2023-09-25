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

const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const k = Number(input[1]);
const data = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

for (let i = 2; i < 2 + k; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  data[a][b] = 1;
}

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let directionIndex = 0;

const turn = (c) => {
  directionIndex = (directionIndex + (c === 'L' ? 3 : 1)) % 4;
};

const l = Number(input[k + 2]);
const info = [];
for (let i = k + 3; i < k + 3 + l; i++) {
  let [x, c] = input[i].split(' ');
  info.push([Number(x), c]);
}

let [x, y] = [1, 1];
data[x][y] = 2;
let time = 0;
let index = 0;
const q = new Queue();
q.enqueue([x, y]);

while (true) {
  const [nx, ny] = [x + directions[directionIndex][0], y + directions[directionIndex][1]];

  if (nx >= 1 && nx <= n && ny >= 1 && ny <= n && data[nx][ny] !== 2) {
    if (data[nx][ny] === 0) {
      data[nx][ny] = 2;
      q.enqueue([nx, ny]);
      const [px, py] = q.dequeue();
      data[px][py] = 0;
    }

    if (data[nx][ny] === 1) {
      data[nx][ny] = 2;
      q.enqueue([nx, ny]);
    }
  } else {
    time++;
    break;
  }

  [x, y] = [nx, ny];
  time++;

  if (index < l && time === info[index][0]) {
    turn(info[index][1]);
    index++;
  }
}
console.log(time);
