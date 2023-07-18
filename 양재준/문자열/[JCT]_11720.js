let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let num = Number(input[0]);
let string = input[1];

let sum = 0;
for(let x of string){
    sum += Number(x);
}

console.log(sum);



