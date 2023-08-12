let [A, B] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

let count = 1;

while (B > A) {
  // B가 짝수이면 2로 나누어 떨어져야 한다.
  // B가 홀수이면 끝자리가 1이어야 한다.
  // 둘 다 아니면 불가능하다.
  // 둘 중 하나라도 가능하면 가능한 연산 중 하나를 수행한다.
  if (B % 2 === 0) {
    B /= 2;
    count++;
  } else if (B % 10 === 1) {
    B = Math.floor(B / 10);
    count++;
  } else {
    break;
  }
}

if (B === A) {
  console.log(count);
} else {
  console.log(-1);
}
