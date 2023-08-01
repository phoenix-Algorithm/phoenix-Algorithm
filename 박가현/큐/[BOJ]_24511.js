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
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = input[1].split(' ').map(Number);
let b = input[2].split(' ').map(Number);
let c = input[4].split(' ').map(Number);
let answer = '';
let queue = new Queue();
let ar = [];
for (const i in a) {
  if (a[i] === 0) {
    ar.push(b[i]);
  }
}
ar = ar.reverse();
for (const i in ar) {
  queue.enqueue(ar[i]);
}
// queue의 map 함수를 이용해 수열 B를 할당해주었습니다
c.map((item) => {
  queue.enqueue(item);
  answer += queue.dequeue() + ' ';
});

console.log(answer.trim());
