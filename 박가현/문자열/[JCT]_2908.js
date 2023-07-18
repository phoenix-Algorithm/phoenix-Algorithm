let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
//let input = fs.readFileSync('test.txt').toString().split(' ');
const reverseStr = (string) => string.split('').reverse().join('');
let str1 = Number(reverseStr(input[0]));
let str2 = Number(reverseStr(input[1]));
if (str1 > str2) {
  console.log(str1);
} else {
  console.log(str2);
}
