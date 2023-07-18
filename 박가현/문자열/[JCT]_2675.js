let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('test.txt').toString().split('\n');

let c = Number(input[0]);
let str = '';
for (let i = 1; i < c + 1; i++) {
  let array = input[i].split(' ');
  let count = Number(array[0]);
  let s = array[1];
  for (let j = 0; j < s.length; j++) {
    for (let k = 0; k < count; k++) {
      str += s.charAt(j);
    }
  }
  console.log(str);
  str = '';
}
