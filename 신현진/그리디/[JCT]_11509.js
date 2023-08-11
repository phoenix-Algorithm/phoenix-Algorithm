//강의 답안 봄ㄴ

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let data = input[1].split(" ").map(Number);
  let result = 0;
  //각 높이에 화살이 몇 개가 있는지
  let arrow = new Array(1000001).fill(0);

  for (let x of data) {
    //해당 높이에 화살이 있다면
    if (arrow[x] > 0) {
      arrow[x] -= 1;
      arrow[x - 1] += 1;
    } else {
      //해당 높이에 화살이 없으면
      arrow[x - 1] += 1;
      //화살 쏘기
      result += 1;
    }
  }
  console.log(result);
  process.exit();
});
