let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
input = Number(input[0]);
let summary = 0;
for (let i = 1; i <= input; i++) {
  summary += i;
}
console.log(summary);
