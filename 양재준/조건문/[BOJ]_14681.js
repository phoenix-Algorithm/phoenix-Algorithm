let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [x,y] = input.map(Number);

if(x > 0) y > 0 ? console.log(1) : console.log(4);
if(x < 0) y > 0 ? console.log(2) : console.log(3);