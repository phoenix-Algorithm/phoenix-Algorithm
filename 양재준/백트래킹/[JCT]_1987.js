const fs = require('fs');
let [RC, ...board] = fs.readFileSync('dev/stdin').toString().split('\n');

const [R, C] = RC.split(' ').map(Number);
board = board.map((el) => el.trim().split(''));

// 알파벳 개수 만큼 visited 배열
const visited = Array(26).fill(false);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let maxCnt = 0;

function dfs(depth, a, b) {
  maxCnt = Math.max(maxCnt, depth);

  for (let i = 0; i < 4; i++) {
    const x = a + dx[i];
    const y = b + dy[i];

    // 보드의 범위를 벗어나는지 체크
    if (x < 0 || x >= R || y < 0 || y >= C) continue;

    // 알파벳의 인덱스 값을 가져와서 해당 인덱스의 visited를 체크
    const index = board[x][y].charCodeAt(0) - 65;
    if (visited[index]) continue;

    visited[index] = true;
    dfs(depth + 1, x, y);
    visited[index] = false;
  }
}

// 첫번째칸
visited[board[0][0].charCodeAt(0) - 65] = true;
dfs(1, 0, 0);
console.log(maxCnt);
