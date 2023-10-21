class minHeap {
  constructor() {
    this.heap = [];
    this.heap.push(-Infinity);
  }
  insert(val) {
    this.heap.push(val);
    this.upheap(this.heap.length - 1);
  }
  upheap(pos) {
    let tmp = this.heap[pos];
    while (tmp < this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = tmp;
  }
  get() {
    if (this.heap.length === 2) return this.heap.pop();
    let res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return res;
  }
  downheap(pos, len) {
    let tmp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child] > this.heap[child + 1]) child++;
      if (tmp <= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = tmp;
  }
  size() {
    return this.heap.length - 1;
  }
  front() {
    return this.heap[1];
  }
}
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const lecture = [];
for (let i = 1; i < input.length; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  lecture.push({ start, end });
}
lecture.sort((a, b) => {
  if (a.start != b.start) return a.start - b.start;
  else return a.end - b.end;
});
const mh = new minHeap();
mh.insert(lecture[0].end);
for (let i = 1; i < lecture.length; i++) {
  const finishTime = mh.get();
  if (finishTime > lecture[i].start) {
    // 제일 일찍 끝나는 시간이 현재 내 시작보다 길때 (즉 들어갈 강의실이 없을 때)
    // 강의실 하나 더 만들어야 할 때
    mh.insert(finishTime);
  }
  mh.insert(lecture[i].end);
  // 강의실 하나 더 만드는 게 아니면 현재 강의의 끝나는 시간만 넣음
}
console.log(lecture);
console.log(mh);
console.log(mh.size());
// 6 4 13 5 8
// 5,7을 추가
// 6 7 13 5 8
// 6 7 13 9 8
// 10 7 13 9 8
// 10 11 13 9 8
// 10 11 13 9 12
// 10 13 11 14 12
