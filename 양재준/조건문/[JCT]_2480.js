let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let [a, b, c] = input[0].split(' ').map(Number);

let reward;

if(a == b && b == c){
    reward = 10000 + a * 1000;
}else if(a == b) {
    reward = 1000 + a * 100;
}
else if (a == c) {
    reward = 1000 + a * 100;
}
else if (b == c) { 
    reward = 1000 + b * 100;
}else{
    let max = Math.max(a, b, c);
    reward = max * 100;
}

console.log(reward);

