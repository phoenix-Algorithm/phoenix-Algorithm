let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');
for (let i = 0; i < input.length; i++) {
  const n = Number(input[i]);
  let dx = new Array(n + 1).fill(false);
  const fibonacci = (n) => {
    if (dx[n] !== false) {
      return dx[n];
    }
    if (n == 1) {
      dx[1] = [0, 1];
      return dx[1];
    }
    if (n == 0) {
      dx[0] = [1, 0];
      return dx[0];
    }
    let a = fibonacci(n - 1);
    let b = fibonacci(n - 2);
    dx[n] = [];
    dx[n].push(a[0] + b[0]);
    dx[n].push(a[1] + b[1]);
    return dx[n];
  };
  fibonacci(n);
  console.log(dx[n][0] + ' ' + dx[n][1]);
}
