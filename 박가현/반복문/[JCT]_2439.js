let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('test.txt').toString().split('\n');
let count = Number(input[0]);
let str = '';
for (let i = 0; i < count; i++) {
  for (let j = 0; j < count - i - 1; j++) {
    str += ' ';
  }
  for (let k = 0; k < i + 1; k++) {
    str += '*';
  }
  console.log(str);
  str = '';
}
