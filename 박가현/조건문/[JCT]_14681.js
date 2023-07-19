let fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
//let input = fs.readFileSync('test.txt').toString().split('\n');
let a = Number(input[0]);
let b = Number(input[1]);

if (a > 0) {
  if (b > 0) {
    console.log(1);
  } else {
    console.log(4);
  }
} else {
  if (b > 0) {
    console.log(2);
  } else {
    console.log(3);
  }
}
