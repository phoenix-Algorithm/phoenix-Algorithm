let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim();
let s = Number(input);
let count = 0;
let num = 0;

while (true) {
  if (num > s) {
    count -= 1;
    break;
  } else if (num === s) {
    break;
  } //num이 s보다 크거나 같으면 반복문 종료
  num += count + 1;
  count++;
}
console.log(count);
