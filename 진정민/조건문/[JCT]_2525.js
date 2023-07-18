// 2525 오븐 시계

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let time = input[0].split(' ');
let hour = Number(time[0]);
let minute = Number(time[1]);

let need = Number(input[1]);

console.log(`${(hour+parseInt(((minute+need)/60)))%24} ${(minute + need)%60}`)