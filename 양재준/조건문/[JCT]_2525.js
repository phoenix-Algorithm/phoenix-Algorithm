let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let h = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let time = Number(input[1].split(' ')[0]);

m = m + time;
while(m >= 60) {
    m -= 60;
    h += 1;
    if(h >= 24) h = 0;
}

console.log(h + ' ' + m);

