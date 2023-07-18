// 10818 최소, 최대

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n'); 

let oldArr = input[1].split(' ')
let newArr = oldArr.map(Number)

console.log(`${Math.min(...newArr)} ${Math.max(...newArr)}`)
