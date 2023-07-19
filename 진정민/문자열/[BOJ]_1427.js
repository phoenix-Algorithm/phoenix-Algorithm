// 1427 소트인사이드

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let arr = input[0].split('')
arr = arr.map(Number)

arr = arr.sort(function(a,b){
  return b-a;
})

let answer = ''

for(let i =0; i<arr.length; i++){
  answer += arr[i].toString()
}

console.log(answer)
