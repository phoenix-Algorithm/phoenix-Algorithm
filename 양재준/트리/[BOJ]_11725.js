let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());

function solution(arr, n) {
  let temp = Array.from(Array(n), () => []);
  let visited = new Array(n).fill(false);
  let answer = new Array(n).fill('');
  let queue = [0];

  arr.forEach((value) => {
    const [a, b] = value.split(' ').map(Number);
    temp[a - 1].push(b - 1);
    temp[b - 1].push(a - 1);
  });

  console.log(temp);

  while (queue.length > 0) {
    const index = queue.shift();
    visited[index] = true;
    temp[index].forEach((value) => {
      if (!visited[value]) {
        queue.push(value);
        answer[value] = `${index + 1}`;
      }
    });
  }
  return answer.join('\n').trim();
}

console.log(solution(input, N));
