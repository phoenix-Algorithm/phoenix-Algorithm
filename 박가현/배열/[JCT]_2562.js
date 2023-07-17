let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('test.txt').toString().split('\n');
input = input.map(Number);
let index = 1;
let data = input.reduce((a, b, i) => {
  if (Math.max(a, b) === b) {
    index = i + 1;
  }
  return Math.max(a, b);
});

console.log(data);
console.log(index);
