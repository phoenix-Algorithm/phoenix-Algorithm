let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('test.txt').toString().split('\n');

let c = Number(input[0]);
let data = input[1].split(' ').map(Number);
let max = Math.max(...data);
for (let i = 0; i < data.length; i++) {
  data[i] = (data[i] / max) * 100;
}
let average = data.reduce((a, b) => a + b) / c;
console.log(average);
