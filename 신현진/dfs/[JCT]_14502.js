//강의답안 봄
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

//0인 곳에 1을 3번 넣을 수 있는 모든 경우 계산해서
//2로 연결되어있는 것이 제일 적은것 OR 0이 제일 많이 남아있는 것 계산
//이걸 내가 어케짜

let [n, m] = input[0].split(" ").map(Number);

let data = [];
//벽 설치 후 맵
let temp = [];

for (let i = 1; i <= n; i++) {
  data.push(input[i].split(" ").map(Number));
  temp.push(new Array(m).fill(0));
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, 1, -1];
let result = 0;

//바이러스가 사방으로 퍼지도록 하는 함수
function virus(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (temp[nx][ny] == 0) {
      temp[nx][ny] = 2;
      virus(nx, ny);
    }
  }
}

//현재 맵에서 안전영역 크기 계산
function getScore() {
  let score = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] == 0) score += 1;
    }
  }
  return score;
}

//울타리를 설치하면서 매번 안전 영역의 크기를 계산
function dfs(count) {
  //3개 설치되었을 때
  if (count == 3) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        //데이터 기록
        temp[i][j] = data[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        //각 바이러스 위치에서 전파를 진행시킴
        if (temp[i][j] == 2) virus(i, j);
      }
    }
    result = Math.max(result, getScore());
    return;
  }
  //울타리 설치하는 로직
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (data[i][j] == 0) {
        data[i][j] = 1;
        dfs(count + 1);
        data[i][j] = 0;
      }
    }
  }
}

dfs(0);
console.log(result);
