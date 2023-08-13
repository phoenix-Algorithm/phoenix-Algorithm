// // 제 첫번째 답은 야무지게 시간 초과 나고 아래 답은 이후 강의 교안을 참고해 작성한 코드입니다
// // minvalue를 통해 확인을 했지만 obj[k]===1일때는 minvalue를 업데이트 하지 못해 틀렸습니다 ㅠ
// let fs = require('fs');
// let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
// let input = fs.readFileSync(path).toString().trim().split('\n');
// let index = 0;
// let testCase = Number(input[index++]);
// let obj = {};
// let answer = 0;
// let str = '';

// for (let i = 0; i < testCase; i++) {
//   let memberNum = Number(input[index++]);
//   for (let j = 0; j < memberNum; j++) {
//     let ar = input[index++].split(' ').map(Number);
//     obj[ar[0]] = ar[1];
//   }
//   let minValue = obj[1];
//   for (let k in obj) {
//     if (Number(k) === 1) {
//       answer++;
//       continue;
//     } else if (obj[k] === 1) {
//       answer++;
//       continue;
//     } else {
//       if (minValue >= obj[k]) {
//         minValue = obj[k];
//         answer++;
//       }
//     }
//   }
//   obj = {};
//   str += answer + '\n';
//   answer = 0;
// } // test 케이스만큼 로직을 반복 test case는 20보다 같거나 작기에 크게 영향 X
// console.log(str.trim());

let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let index = 0;
let testCase = Number(input[index++]);
let obj = {};
let answer = 0;
let str = '';

for (let i = 0; i < testCase; i++) {
  let memberNum = Number(input[index++]);
  for (let j = 0; j < memberNum; j++) {
    let ar = input[index++].split(' ').map(Number);
    obj[ar[0]] = ar[1];
  }
  let minValue = obj[1];
  for (let k in obj) {
    if (Number(k) === 1) {
      answer++;
      continue;
    } else if (obj[k] === 1) {
      answer++;
      continue;
    } else {
      if (minValue >= obj[k]) {
        minValue = obj[k];
        answer++;
      }
    }
  }
  obj = {};
  str += answer + '\n';
  answer = 0;
} // test 케이스만큼 로직을 반복 test case는 20보다 같거나 작기에 크게 영향 X
console.log(str.trim());

// 정답
