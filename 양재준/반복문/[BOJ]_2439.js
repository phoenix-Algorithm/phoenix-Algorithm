let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const num =Number(input[0]);

let star = "";
for(let i = 1; i <= num ; i++ ) {
    for(let j = num; j >= 1; j--){
        if(j > i) star += " "
        else star += "*"
    }

    star += "\n"
}

console.log(star)