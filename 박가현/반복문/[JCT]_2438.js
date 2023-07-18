let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('test.txt').toString().split('\n');
input = Number(input[0]);
let str = '';
for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= 1; j++) {
    str += '*';
  }
  console.log(str);
}
