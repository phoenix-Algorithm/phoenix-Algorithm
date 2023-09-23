let fs = require("fs");
let input = fs.readFileSync("dev/stdin.txt").toString().split("\n");

let [s, t] = input[0].split(" ").map(Number);

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

let queue = new Queue();
//값, 연산자 삽입
queue.enqueue([s, ""]);

let visited = new Set([s]);
let found = false;

if (s == t) {
  console.log(0);
  process.exit();
}

//큐가 빌 때까지 반복
while (queue.getLength() != 0) {
  let [value, opers] = queue.dequeue();
  //범위를 벗어나는 경우 무시
  if (value > 1e9) continue;
  //목표값에 도달한 경우
  if (value == t) {
    console.log(opers);
    found = true;
    break;
  }
  for (let oper of ["*", "+", "-", "/"]) {
    let nextValue = value;
    if (oper == "*") nextValue *= value;
    if (oper == "+") nextValue += value;
    if (oper == "-") nextValue -= value;
    if (oper == "/" && value != 0) nextValue = 1;

    if (!visited.has(nextValue)) {
      queue.enqueue([nextValue, opers + oper]);
      visited.add(nextValue);
    }
  }
}

if (!found) console.log(-1);
