// 강의실 배정
// 어려워서 블로그 답안 참고했습니다...
// https://junghyeonsu.tistory.com/275

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let answer = 0;
let classCount = 0;

const N = Number(input[0]);
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push({ time: input[i].split(' ').map(Number)[0], start: 1 });
  arr.push({ time: input[i].split(' ').map(Number)[1], start: -1 });
}
console.log(arr);

arr.sort((a, b) => (a.time === b.time ? a.start - b.start : a.time - b.time));

console.log(arr);

arr.forEach(schesule => {
  if (schesule.start === -1) {
    classCount--;
  } else if (schesule.start === 1) {
    classCount++;
  }
  // 강의실 개수가 이전보다 많으면 답안을 classCount로
  answer = classCount > answer ? classCount : answer;
});

console.log(answer);
