// 3-3. 풍선 맞추기

// 내 풀이
// let fs = require("fs");
// let input = fs.readFileSync("dev/stdin").toString().split("\n");

// const N = Number(input[0]);
// const arr = input[1].split(" ").map(Number);

// let cur = arr[0];
// let cnt = 1;
// for (let i = 1; i < N; i++) {
//   console.log(cur, arr[i]);
//   if (cur - 1 === arr[i]) {
//     continue;
//   } else {
//     console.log("새 화살");
//     cnt++;
//   }
//   cur = arr[i];
//   console.log("cnt: ", cnt);
// }

// console.log(cnt);

// 강의 풀이
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let data = input[1].split(" ").map(Number); // 모든 풍선의 위치 정보 입력 받기
  let result = 0;
  let arrow = new Array(100001).fill(0); // 각 높이에 화살이 몇 개 있는지
  for (let x of data) {
    if (arrow[x] > 0) {
      //해당 높이에 화살이 있다면
      arrow[x] -= 1;
      arrow[x - 1] += 1;
    } else {
      // 해당 높이에 화실이 없다면
      arrow[x - 1] += 1;
      result += 1; // 화살 쏘기
    }
  }
  console.log(result);
  process.exit();
});
