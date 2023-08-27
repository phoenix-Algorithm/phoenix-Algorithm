//강의답안
let fs = require("fs");
let n = +fs.readFileSync("./input.txt").toString().trim();

//현재 체스판에 놓인 퀸의 위치 정보
let queens = [];

//(x,y)위치에 퀸을 놓을 수 있는지 확인하는 함수
function possible(x, y) {
  for (let [a, b] of queens) {
    //행이나 열이 같다면 놓을 수 없음
    if (a == x || b == y) return false;
    //대각선에 위치한 경우 놓을 수 없음
    if (Math.abs(a - x) == Math.abs(b - y)) return false;
  }
  return true;
}

let count = 0;
function dfs(row) {
  //퀸을 n개 배치할 수 있는 경우 카운트
  if (row == n) count += 1;
  //현재 행에 존재하는 열을 하나씩 확인
  for (let i = 0; i < n; i++) {
    //현재 위치에 놓을 수 없으면 무시
    if (!possible(row, i)) continue;
    //현재 위치에 퀸을 놓기
    queens.push([row, i]);
    //재귀함수 호출
    dfs(row + 1);
    //현재 위치에서 퀸을 제거
    queens.pop();
  }
}

dfs(0);
console.log(count);
