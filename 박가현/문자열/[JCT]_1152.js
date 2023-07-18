let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
//let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let array = input.split(' ');
if (array == '') {
  console.log(0);
} else {
  console.log(array.length);
}
