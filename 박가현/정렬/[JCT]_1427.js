let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('').map(Number);
let ar = input.sort((a, b) => {
  return b - a;
}); // 오름차순으로 정렬
let answer = ar.join('');
console.log(answer);
