let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let max = 0;
let idx = 0;

for(let i=0; i<input.length; i++){
    let num = Number(input[i]);
    if(num > max) {
        max = num;
        idx = i;
    }
    
}

console.log(max);
console.log(idx + 1);

