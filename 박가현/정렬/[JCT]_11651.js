let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [N, ...input] = fs.readFileSync(path).toString().trim().split('\n');

// 11650과 비슷한 로직
N = Number(N);
let array = [];
for (let i = 0; i < N; i++) {
  array.push(input[i].trim().split(' '));
}
array.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});
for (let i in array) {
  array[i] = array[i].join(' ');
}
let answer = array.join('\n');
console.log(answer);
