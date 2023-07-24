let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n = Number(input[0]);
let str = '';
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
    if (this.tailIndex - this.headIndex === 0) {
      return -1;
    }
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  front() {
    return this.items[this.headIndex];
  }
  back() {
    return this.items[this.tailIndex - 1];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let queue = new Queue();
for (let i = 0; i < n + 1; i++) {
  let command = input[i].trim().split(' ')[0];
  let num = input[i].trim().split(' ')[1];
  switch (command) {
    case 'push':
      queue.enqueue(num);
      break;
    case 'pop':
      str += queue.dequeue() + '\n';
      break;

    case 'size':
      str += queue.getLength() + '\n';
      break;
    case 'empty':
      queue.getLength() === 0 ? (str += 1 + '\n') : (str += 0 + '\n');
      break;

    case 'front':
      queue.getLength() === 0
        ? (str += -1 + '\n')
        : (str += queue.front() + '\n');
      break;

    case 'back':
      queue.getLength() === 0
        ? (str += -1 + '\n')
        : (str += queue.back() + '\n');
      break;
  }
}
console.log(str);
