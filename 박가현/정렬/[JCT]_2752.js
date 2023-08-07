let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim();
input = input.split(' ');
input = input.sort((a, b) => {
  return a - b;
});
let answer = input.join(' ');
console.log(answer);
