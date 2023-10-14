let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let n = Number(input[0]);

let array = [[]];
for (let i = 1; i < input.length; i++) {
  array.push(input[i].split(' ').map(Number));
}

for (let i = 2; i < array.length; i++) {
  let a = array[i];
  a[0] += Math.min(array[i - 1][1], array[i - 1][2]);
  a[1] += Math.min(array[i - 1][0], array[i - 1][2]);
  a[2] += Math.min(array[i - 1][0], array[i - 1][1]);
}

console.log(Math.min(...array[array.length - 1]));
