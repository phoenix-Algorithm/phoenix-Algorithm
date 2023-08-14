let fs = require('fs');
let N = Number(fs.readFileSync('dev/stdin').toString().trim());

let count = 0;
while (N >= 0) {
  // 5로 나누어 떨어지면 5로 나누고 몫을 count에 더한다.
  if (N % 5 === 0) {
    count += N / 5;
    break;
  }
  // 5로 나누어 떨어지지 않으면 3을 빼고 count에 1을 더한다.
  else {
    N -= 3;
    count++;
  }

  // N이 0보다 작아지면 -1을 출력하고 반복문을 종료한다.
  if (N < 0) {
    console.log(-1);
    break;
  }
}

// N이 0보다 크면 count를 출력한다.
if (N >= 0) console.log(count);
