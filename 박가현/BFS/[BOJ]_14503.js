// class Queue {
//   constructor() {
//     this.items = {};
//     this.headIndex = 0;
//     this.tailIndex = 0;
//   }
//   enqueue(item) {
//     this.items[this.tailIndex] = item;
//     this.tailIndex++;
//   }
//   dequeue() {
//     const item = this.items[this.headIndex];
//     delete this.items[this.headIndex];
//     this.headIndex++;
//     return item;
//   }
//   peek() {
//     return this.items[this.headIndex];
//   }
//   getLength() {
//     return this.tailIndex - this.headIndex;
//   }
// }
// let fs = require('fs');
// let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
// let input = fs.readFileSync(path).toString().trim().split('\n');

// const [n, m] = input[0].split(' ').map(Number);
// let [r, c, d] = input[1].split(' ').map(Number);
// const array = [];
// for (let i = 2; i < input.length; i++) {
//   array.push(input[i].split(' ').map(Number));
// }
// const q = new Queue();
// q.enqueue([r, c]);
// let count = 0;
// while (true) {
//   let [x, y] = q.dequeue();
//   if (array[x][y] == 0) {
//     count++;
//     array[x][y] = 3;
//   }
//   let blank = false;
//   for (let ij of [
//     [x - 1, y],
//     [x + 1, y],
//     [x, y - 1],
//     [x, y + 1],
//   ]) {
//     const [i, j] = ij;
//     if (i < 0 || i >= n || j < 0 || j >= m) continue;
//     if (array[i][j] == 0) blank = true;
//   } // 주변 4칸 중 빈칸이 있는 지 없는 지 확인
//   if (blank) {
//     if (d === 0) {
//       d = 3;
//       if (array[x] !== undefined && array[x][y - 1] === 0) {
//         q.enqueue([x, y - 1]);
//       } else {
//         q.enqueue([x, y]);
//       }
//     } // 북쪽 왼쪽 옆으로 한칸 방향은 서쪽으로
//     else if (d === 1) {
//       d = 0;
//       if (array[x - 1] !== undefined && array[x - 1][y] === 0) {
//         q.enqueue([x - 1, y]);
//       } else {
//         q.enqueue([x, y]);
//       }
//     } // 동쪽 위로 한 칸 방향은 북쪽으로
//     else if (d === 2) {
//       d = 1;
//       if (array[x][y + 1] === 0) {
//         q.enqueue([x, y + 1]);
//       } else {
//         q.enqueue([x, y]);
//       }
//     } //남쪽 오른쪽으로 한 칸 방향은 동쪽으로
//     else if (d === 3) {
//       d = 2;
//       if (array[x + 1] !== undefined && array[x + 1][y] === 0) {
//         q.enqueue([x + 1, y]);
//       } else {
//         q.enqueue([x, y]);
//       }
//     } // 서쪽 아래로 한칸 방향은 남쪽으로
//   } //빈칸이 있는 경우
//   else {
//     if (d === 0) {
//       if (array[x + 1] !== undefined && array[x + 1][y] !== 1) {
//         q.enqueue([x + 1, y]);
//       } //후진이 가능하다면
//       else {
//         break;
//       }
//     } // 북쪽 남쪽으로 후진 아래로 한칸
//     else if (d === 1) {
//       if (array[x][y - 1] !== undefined && array[x][y + 1] !== 1) {
//         q.enqueue([x, y - 1]);
//       } else {
//         break;
//       }
//     } // 동쪽 왼쪽으로 한칸
//     else if (d === 2) {
//       if (array[x - 1] !== undefined && array[x - 1][y] !== 1) {
//         q.enqueue([x - 1, y]);
//       } else {
//         break;
//       }
//     } //남쪽 위로 한칸
//     else if (d === 3) {
//       if (array[x][y + 1] !== undefined && array[x][y + 1] !== 1) {
//         q.enqueue([x, y + 1]);
//       } else {
//         break;
//       }
//     } // 서쪽 오른쪽으로 후진
//   } //빈칸이 없는 경우
// }

// console.log(count);
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

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const [r, c, d] = input[1].split(' ').map(Number);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const arr = [];
for (let i = 2; i < input.length; i++) {
  arr.push(input[i].split(' ').map(Number));
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
