let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let num = Number(input[0]);
let result = '';

for(let i = 1; i <= num; i++){
    let a = Number(input[i].split(' ')[0]);
    let b = Number(input[i].split(' ')[1]);
    result += a + b + '\n';
}

console.log(result);



