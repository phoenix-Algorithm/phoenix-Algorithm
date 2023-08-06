let fs = require('fs');
let [N, ...input] = fs
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((v) => v.trim());

N = parseInt(N);
let arr = [];

let set = new Set();
for (let i = 0; i < N; i++) {
  set.add(input[i]);
}

arr = [...set];

function compareFunction(a, b) {
  if (a.length === b.length) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
  return a.length - b.length;
}

arr.sort(compareFunction);

let answer = '';
for (word of arr) {
  answer += word + '\n';
}

console.log(answer);
