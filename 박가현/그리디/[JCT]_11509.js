// 제 코드인데 강의 코드랑 obj가 객체냐 배열이냐 차이인데 오답인 이유를 모르겠어요
// let fs = require('fs');
// let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
// let [n, input] = fs.readFileSync(path).toString().trim().split('\n');
// let array = input.split(' ').map(Number);
// let obj = {};
// let count = 0;
// for (let i of array) {
//   if (obj[i] > 0) {
//     obj[i] -= 1;
//   } //화살이 새로 필요한거
//   else {
//     count++;
//   } //화살이 존재함
//   obj[i - 1] += 1;
// }
// console.log(count);

//강의 정답 코드입니다
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line); // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
}).on('close', function () {
  let data = input[1].split(' ').map(Number); // 모든 풍선의 위치 정보 입력받기
  let result = 0;
  let arrow = new Array(1000001).fill(0); // 각 높이에 화살이 몇 개 있는지
  for (let x of data) {
    if (arrow[x] > 0) {
      // 해당 높이에 화살이 있다면
      arrow[x] -= 1;
      arrow[x - 1] += 1;
    } else {
      // 해당 높이에 화살이 없다면
      arrow[x - 1] += 1;
      result += 1; // 화살 쏘기
    }
  }
  console.log(result);
  process.exit();
});
