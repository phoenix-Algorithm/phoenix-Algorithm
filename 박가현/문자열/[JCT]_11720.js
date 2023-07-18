let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('test.txt').toString().split('\n');
let c = Number(input[0]);
let str = input[1];
let sum = 0;
for (let i = 0; i < c; i++) {
  let n = Number(str.charAt(i));
  sum += n;
}
console.log(sum);
