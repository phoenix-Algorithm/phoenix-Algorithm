// 로봇 청소기
/** 내 풀이 -> 예제 1은 맞게 나오는데 예제 2는 시간초과 뜸
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

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ").map(Number);

let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];

let arr = [];
for (let i = 2; i < input.length; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let visited = [];
for (let i = 0; i < n; i++) {
  visited.push(new Array(m).fill(0));
}

let queue = new Queue();

function bfs(r, c, d) {
  queue.enqueue([r, c]);
  visited[r][c] = 1;

  while (queue.getLength() != 0) {
    let [r, c] = queue.dequeue();
    let count = 0;

    for (let i = 0; i < 4; i++) {
      let nr = r + dx[i];
      let nc = c + dy[i];
      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < n &&
        nc < m &&
        visited[nr][nc] == 0 &&
        arr[nr][nc] == 1
      ) {
        count++;
      }
    }
    if (count == 4) {
      if (d == 0) {
        if (arr[r][c + 1] == 1) break;
        else {
          visited[r][c + 1] = 1;
          queue.enqueue([r, c + 1]);
        }
      } else if (d == 1) {
        if (arr[r - 1][c] == 1) break;
        else {
          visited[r - 1][c] = 1;
          queue.enqueue([r - 1, c]);
        }
      } else if (d == 2) {
        if (arr[r][c - 1] == 1) break;
        else {
          visited[r][c - 1] = 1;
          queue.enqueue([r, c - 1]);
        }
      } else {
        if (arr[r + 1][c] == 1) break;
        else {
          visited[r + 1][c] = 1;
          queue.enqueue([r + 1, c]);
        }
      }
    } else {
      d += 1;
      if (d == 4) d = 0;
      if (d == 0) {
        visited[r][c - 1] = 1;
        queue.enqueue([r, c - 1]);
      } else if (d == 1) {
        visited[r + 1][c] = 1;
        queue.enqueue([r + 1, c]);
      } else if (d == 2) {
        visited[r][c + 1] = 1;
        queue.enqueue([r, c + 1]);
      } else {
        visited[r - 1][c] = 1;
        queue.enqueue([r - 1, c]);
      }
    }
  }
  return [].concat(...visited).filter((v) => v == 1).length;
}

console.log(bfs(r, c, d));*/

/** gpt 코드 */
//queue를 배열로 간단하게 구현
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  getLength() {
    return this.items.length;
  }
}

const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const [r, c, d] = input[1].split(" ").map(Number);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const arr = [];
for (let i = 2; i < input.length; i++) {
  arr.push(input[i].split(" ").map(Number));
}

// visited를 set으로 구현 -> 중복 막음
const visited = new Set();
// 청소 횟수
let result = 0;

function bfs(r, c, d) {
  const queue = new Queue();
  // 현재 위치 청소 (처음에 있는 곳은 항상 0)
  queue.enqueue([r, c]);
  visited.add(`${r}-${c}`);
  result++;

  while (queue.getLength() !== 0) {
    const [r, c] = queue.dequeue();
    let turned = false;

    for (let i = 0; i < 4; i++) {
      d = (d + 3) % 4; // 왼쪽으로 회전
      const nr = r + dx[d];
      const nc = c + dy[d];

      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < n &&
        nc < m &&
        !visited.has(`${nr}-${nc}`) &&
        arr[nr][nc] === 0
      ) {
        visited.add(`${nr}-${nc}`);
        result++;
        queue.enqueue([nr, nc]);
        turned = true;
        break;
      }
    }

    //청소할 공간이 없다면
    if (!turned) {
      // 바라보는 방향 (d) 유지한 채 한 칸 후진
      const backDir = (d + 2) % 4; // 후진 방향
      const nr = r + dx[backDir];
      const nc = c + dy[backDir];

      //후진한 칸 0/1 여부 확인하고, 1이면 작동 종료시킴

      if (nr >= 0 && nc >= 0 && nr < n && nc < m && arr[nr][nc] === 0) {
        queue.enqueue([nr, nc]);
      } else {
        break;
      }
    }
  }
}

bfs(r, c, d);
console.log(result);
