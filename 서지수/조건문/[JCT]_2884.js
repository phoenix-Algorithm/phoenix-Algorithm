// 2. 알람 시계

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = input[0].split(" ");

let H = parseInt(line[0]);
let M = parseInt(line[1]);

function alarm(h, m) {
  if (m >= 45) {
    console.log(h, m - 45);
  } else {
    if (h == 0) {
      console.log(23, 60 - 45 + m);
    } else {
      console.log(h - 1, 60 - 45 + m);
    }
  }
}

alarm(H, M);

// 강의 정답
let fs = require("fs");
let input2 = fs.readFileSync("/dev/stdin").toString().split("\n");

// 한번에 변환
let hour = parseInt(input2[0].split(" ")[0]);
let minute = parseInt(input2[0].split(" ")[1]);

// 45미만인지 먼저 확인
if (m < 45) {
  hour - 1;
  // 60 - 45가 곧 15니까 바로 15를 더해줌
  minute += 15;
  if (hour < 0) {
    hour = 23;
  }
} else {
  minute -= 45;
}

console.log(hour, minute);
