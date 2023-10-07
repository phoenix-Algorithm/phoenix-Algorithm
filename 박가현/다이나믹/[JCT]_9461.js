let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');

const dy = (n) => {
  let p = [1, 1, 1, 2, 2];
  for (let i = 5; i < n; i++) {
    p[i] = p[i - 1] + p[i - 5];
  }
  return p[n - 1];
};

let answer = [];
for (let i = 0; i < input.length; i++) {
  let n = input[i];
  answer.push(dy(n));
}
console.log(answer.join('\n'));
