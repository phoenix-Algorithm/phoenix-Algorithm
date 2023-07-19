let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let array = input[0].split('').map(Number);
let count = array.length;
let str = '';
for (let i = 0; i < count; i++) {
  let num = Math.max(...array);
  let index = array.indexOf(num);
  array.splice(index, 1);
  str += num;
}
console.log(str);
