let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let [N, K] = input.shift().split(' ').map(Number);
let data = input.shift().split(' ').map(Number);

data.sort((a, b) => a - b);

console.log(data[K - 1]);
