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
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

let structure = input[1].split(" ").map(Number);
let numbers = input[2].split(" ").map(Number);
let inputNum = input[4].split(" ").map(Number);

let answer = "";
let queue = new Queue();
let arr = [];

//만약에 자료구조가 0이라면 (queue라면) arr에 push
//스택은 pop할때 어차피 나중에 삽입한게 먼저 추출되므로 결과가 같기 때문에
//queue일 때만 고려
for (let i = 0; i < structure.length; i++) {
  if (structure[i] === 0) {
    arr.push(numbers[i]);
  }
}

//왜 reverse()를 하는지?
arr = arr.reverse();

//자료구조가 큐에 해당하는 숫자만 queue에 넣어줌
for (const i in arr) {
  queue.enqueue(arr[i]);
}
// inputNum을 하나씩 enq했다가 dep해보기
inputNum.map((item) => {
  queue.enqueue(item);
  //console.log(queue);
  answer += queue.dequeue() + " ";
  //console.log(queue);
});

console.log(answer.trim());
