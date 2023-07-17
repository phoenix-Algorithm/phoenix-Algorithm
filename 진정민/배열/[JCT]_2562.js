// 2562 최댓값

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n'); 

let arr = input.map(Number)

let max = 0;
let count = 0;

for(let i = 0; i <arr.length; i++){
  count = arr[i] > max ? i+1 : count;
  max = arr[i] > max ? arr[i] : max;
}

console.log(max, count)