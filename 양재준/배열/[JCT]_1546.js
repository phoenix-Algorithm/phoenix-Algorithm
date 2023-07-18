let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let num = Number(input[0]);

let arr = input[1].split(' ').map(x => Number(x));
let max = arr.reduce((a,b) => Math.max(a,b));
console.log(max)
let sum = 0;
for(let i=0; i<num; i++){
    sum += arr[i] / max * 100;
}


console.log((sum / num).toFixed(2));

