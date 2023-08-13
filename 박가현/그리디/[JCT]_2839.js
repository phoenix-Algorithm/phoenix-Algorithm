let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim();
input = Number(input);
let num = Math.floor(input / 5);
let b = 0;
while (true) {
  if ((input - num * 5) % 3 !== 0) {
    // 5킬로그램을 몇봉지 가져갈 것인지 결정
    // 만약 5킬로그램을 num만큼 가져갔을 때 나머지가 3킬로그램으로 나눠지지 않는다면
    //num--
    num--;
    if (num < 0) {
      num = 0;
      b = -1;
      break;
    }
    continue;
  }
  let a = input - num * 5;
  b = a / 3;
  break;
}

console.log(b + num);
