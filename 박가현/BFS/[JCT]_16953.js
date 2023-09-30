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
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let [a, b] = input[0].split(' ').map(Number);
let num = 0;
let s = false;

while (b >= a) {
  if (b === a) {
    s = true;
    num++;
    break;
  }
  if (b % 2 === 0) {
    b = b / 2;
    num++;
  } //짝수면
  else {
    let ar = b.toString().split('').map(Number);
    if (ar.pop() === 1) {
      if (ar.length === 1) {
        b = Number(ar[0]);
      } else {
        b = Number(ar.join(''));
      }
      num++;
    } else {
      break;
    }
  }
}
if (s) {
  console.log(num);
} else {
  console.log(-1);
}
