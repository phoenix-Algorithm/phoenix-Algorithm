// 3. 오븐 시계

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let H = parseInt(input[0].split(" ")[0]);
let M = parseInt(input[0].split(" ")[1]);
let T = parseInt(input[1].split(" ")[0]);

if (M + T < 60) {
  M += T;
} else {
  hour = parseInt((M + T) / 60);
  H += hour;
  M = M + T - hour * 60;
}
if (H >= 24) {
  H -= 24;
}

console.log(H, M);

// 강의 정답
// 시(hour)를 포함한 모든 시간은 분으로 바꾼 뒤
// 거기에 걸리는 시간을 더하고 1140으로 나눠 24시를 넘는지 확인하고
// 60으로 나눠 몫과 나머지를 시, 분으로 설정한다.
//fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require("fs");
let input2 = fs.readFileSync("/dev/stdin").toString().split("\n");

// 한번에 변환
let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);

let totalMinute = a * 60 + b + c; // 분의 형태로 바꾸기
totalMinute %= 1440;
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + " " + minute);
