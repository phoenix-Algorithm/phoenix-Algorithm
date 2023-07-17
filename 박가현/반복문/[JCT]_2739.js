let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
input = Number(input[0]);
let result = 0;
for (let i = 1; i < 10; i++) {
  result = i * input;
  console.log(`${input} * ${i} = ${result}`);
}
