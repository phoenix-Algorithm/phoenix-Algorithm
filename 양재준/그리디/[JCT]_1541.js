const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim();

// 50 - 50 + 40
// 50 - (50 + 40) 일때 최소값
// 마이너스가 나오면 그 뒤에 나오는 수는 다 빼줘야 최소값이 나옴

// 100 - 50 - 50 + 40
// 100 - (50) - (50 + 40) 일때 최소값

let minus = input.split('-');
// minus.length => minus가 나오는 횟수 + 1

let result = 0;
for (let i = 0; i < minus.length; i++) {
  let plus = minus[i].split('+');
  let sum = 0;
  for (let j = 0; j < plus.length; j++) {
    sum += Number(plus[j]);
  }
  if (i === 0) {
    result += sum;
  } else {
    result -= sum;
  }
}

console.log(result);
