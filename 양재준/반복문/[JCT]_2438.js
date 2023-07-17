let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let num = Number(input[0]);

let star = ''
for(let i = 1; i <= num; i++){
    star = '';
    for(let j = 1; j <= i; j++){
        star += '*'
    }
    console.log(star);
}



