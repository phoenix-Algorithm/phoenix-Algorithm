//숨바꼭질 3
//답안 봄
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, k] = fs.readFileSync(path).toString().trim().split(" ").map(Number);

const max = 100001;
let visited = new Array(max).fill(false);

/* 내풀이
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

function bfs() {
  let queue = new Queue();
  queue.enqueue(n);

  while (queue.getLength() != 0) {
    let cur = queue.dequeue();

    if (cur == k) return visited[cur];

    for (let next of [cur - 1, cur + 1, cur * 2]) {
      if (next < 0 || next >= max) continue;
      if (visited[next] == 0) {
        if (next == cur*2) visited[next] = visited[cur];
        else visited[next] = visited[cur] + 1;
        queue.enqueue(next);
      }
    }
  }
}

console.log(bfs());*/

function bfs() {
  //시간이랑 같이 넣기
  let queue = [[n, 0]];
  visited[n] = true;

  while (queue.length) {
    let [cur, time] = queue.shift();

    if (cur == k) return time;

    for (let next of [cur - 1, cur + 1, cur * 2]) {
      //이미 방문 완료한 지점일 때 까지 무시
      if (next < 0 || next >= max || visited[next]) continue;
      if (next == cur * 2) {
        //순간이동 했을 때가 더 속도가 빠르기 때문에 우선적으로 탐색해주어야 한다.
        //따라서 unshift로 배열의 맨 앞에 위치할 수 있도록 한다.
        queue.unshift([next, time]);
      } else {
        //나머지 (1초 걸리는 것들)는 그냥 push로 순차적으로 넣어줌
        queue.push([next, time + 1]);
      }
      //방문 완료했다고 표시
      visited[next] = true;
    }
  }
}

console.log(bfs());
