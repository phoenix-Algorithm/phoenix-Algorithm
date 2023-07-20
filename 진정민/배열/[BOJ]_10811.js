// 10811 바구니 뒤집기

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let N = Number(input[0].split(' ')[0])
let M = Number(input[0].split(' ')[1])

let arr = []
for(let i = 0; i<N; i++){
  arr[i] = i+1;
}

for(let i = 0; i < M; i++){
  let newArr = []

  let num1 = Number(input[i+1].split(' ')[0])
  let num2 = Number(input[i+1].split(' ')[1])

  for(let j = 0; j<num2-num1+1; j++){
    newArr[j] = arr[num1+j-1]
  }
  
  newArr = newArr.reverse()
  
  for(let j = 0; j<num2-num1+1; j++){
    arr[num1+j-1] = newArr[j]
  }  
}

console.log(...arr)