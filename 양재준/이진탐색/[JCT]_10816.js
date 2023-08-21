const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const cards = input[1].split(' ').map(Number);
const M = Number(input[2]);
const targets = input[3].split(' ').map(Number);

const result = [];
const map = new Map();

// 카드에 적힌 숫자를 key로, 카드의 개수를 value로 하는 Map을 만든다.
for (let i = 0; i < N; i++) {
  if (map.has(cards[i])) map.set(cards[i], map.get(cards[i]) + 1);
  else map.set(cards[i], 1);
}

// 타겟을 하나씩 꺼내서 카드에 적힌 숫자를 key로 하는 Map에 있는 value를 result에 넣는다.
for (let i = 0; i < M; i++) {
  if (map.has(targets[i])) result.push(map.get(targets[i]));
  else result.push(0);
}

console.log(result.join(' '));
