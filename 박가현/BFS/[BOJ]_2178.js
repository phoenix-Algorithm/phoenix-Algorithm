// 비슷한 문제 https://school.programmers.co.kr/learn/courses/30/lessons/1844
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
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
const [m, n] = input[0].split(' ').map(Number);
const maps = [];
for (let i = 1; i < input.length; i++) {
  maps.push(input[i].split('').map(Number));
}
function solution(maps) {
  //m은 세로 길이 n은 가로 길이
  function bfs() {
    queue = new Queue();
    queue.enqueue([m - 1, n - 1, 1]); // 거꾸로 , m n 에서 0 0 으로
    maps[m - 1][n - 1] = 0;
    while (queue.getLength() != 0) {
      let [a, b, t] = queue.dequeue();
      if (a === 0 && b === 0) {
        return t;
      }
      for (let c of [
        [a - 1, b],
        [a + 1, b],
        [a, b - 1],
        [a, b + 1],
      ]) {
        const [i, j] = c;
        if (i < 0 || i >= m || j < 0 || j >= n) continue;
        if (maps[i][j] === 0) continue;
        maps[i][j] = 0;
        queue.enqueue([i, j, t + 1]);
      }
    }
  }
  const answer = bfs();
  if (answer === undefined) return -1;
  return answer;
}
console.log(solution(maps));
