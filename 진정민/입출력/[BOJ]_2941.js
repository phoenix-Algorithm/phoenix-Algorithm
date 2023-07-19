// 2941 크로아티아 알파벳

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let arr = input[0]

let cro = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

for (let i = 0; i <cro.length; i++){
  arr = arr.replaceAll(cro[i], "/")
}

console.log(arr.length)