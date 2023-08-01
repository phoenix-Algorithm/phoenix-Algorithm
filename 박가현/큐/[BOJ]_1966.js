const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...arr] = input;
arr = arr.map((item) => item.split(' ').map(Number));
let answer = '';

for (let i = 0; i < arr.length; i += 2) {
  let count = 0;
  const priorities = arr[i + 1];
  let location = arr[i][1];

  while (true) {
    const max = Math.max(...priorities);
    const number = priorities.shift(); // 앞에 요소에서 제거한 숫자
    if (number === max) {
      count++;
      if (location === 0) {
        answer += count + '\n';
        break;
      } //shift한 number가 원하는 location이였는 지 (지금 shift한 number는 index가 0 이었고 location이 0이었는 지를 따짐)
    } // 현재 제거한 숫자가 max 이면 다시 넣을 필요 X
    else {
      priorities.push(number);
    }
    if (location === 0) {
      location = priorities.length - 1;
    } else {
      location--;
    }
  }
}

console.log(answer.trim());
