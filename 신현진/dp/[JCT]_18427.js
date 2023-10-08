//함께 블록 쌓기
//강의답안 봄

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let [n, m, h] = input[0].split(" ").map(Number);

let a = [];
let d = new Array(h + 1).fill(0);
for (let i = 1; i <= n; i++) {
  a.push(input[i].split(" ").map(Number));
}

d[0] = 1; //높이가 0인 경우, 아무 블럭도 쌓지 않는 경우의 수가 1회 존재

//모든 학생에 대해서 처리
//1번 학생부터 차례대로 블럭을 쌓는다.
for (let i = 0; i < n; i++) {
  let data = [];
  //각 높이에 대해서
  for (j = 0; j <= h; j++) {
    //각 학생을 한 명씩 확인
    for (let k = 0; k < a.length; k++) {
      //현재 학생의 블록으로 특정 높이의 탑을 쌓을 수 있는 경우
      if (d[j] != 0 && j + a[i][k] <= h) {
        data.push([j + a[i][k], d[j]]);
      }
    }
  }
  //쌓을 수 있는 높이에 대해 경우의 수 증가
  for ([height, value] of data) {
    d[height] = (d[height] + value) % 10007;
  }
  console.log(i + "일 때, d의 값: " + d);
}

console.log(d[h]);
