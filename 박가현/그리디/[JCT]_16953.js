//처음 적었던 답인데 정답이랑 로직은 비슷해요
// 그런데 이게 왜 틀렸는 지 모르겠습니다
// let fs = require('fs');
// let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
// let input = fs.readFileSync(path).toString().trim().split(' ');
// let endNum = Number(input[1]);
// let startNum = Number(input[0]);
// let answer = 1;

// while (endNum > startNum) {
//   if (endNum % 2 === 0) {
//     endNum = endNum / 2;
//     answer++;
//   } else {
//     let n = endNum;
//     let ar = [...n.toString()];
//     if (ar[ar.length - 1] !== 1) {
//       break;
//     }
//     ar.pop();
//     let str = ar.join('');
//     endNum = Number(str);
//     answer++;
//   }
// }
// if (endNum === startNum) {
//   console.log(answer);
// } else {
//   console.log(-1);
// }

// 강의 교안 참고+ 위의 코드 수정한 정답 코드입니다

let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split(' ');
let endNum = Number(input[1]);
let startNum = Number(input[0]);
let answer = 1;

while (endNum > startNum) {
  if (endNum % 2 === 0) {
    endNum = endNum / 2;
    answer++;
  } else if (endNum % 10 === 1) {
    endNum = Math.floor(endNum / 10);
    answer++;
  } else {
    break;
  }
}
if (endNum === startNum) {
  console.log(answer);
} else {
  console.log(-1);
}
