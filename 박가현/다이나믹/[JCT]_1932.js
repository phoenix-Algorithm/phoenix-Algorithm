let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');
let array = [];
for (let i = 0; i < input.length; i++) {
  array.push(input[i].split(' ').map(Number));
}
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    let a = array[i - 1][j];
    let b = array[i - 1][j - 1];
    if (a !== undefined && b !== undefined) {
      array[i][j] += Math.max(a, b);
    } else if (a === undefined) {
      array[i][j] += b;
    } else if (b === undefined) {
      array[i][j] += a;
    }
  }
}
console.log(Math.max(...array[array.length - 1]));
