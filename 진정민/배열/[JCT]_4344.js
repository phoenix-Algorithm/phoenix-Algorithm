// 4344 평균은 넘겠지

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n'); 

let testcase = input[0];

for(let i = 1; i <= testcase; i++){
  let data = []
  let average = 0;
  let count = 0;
  
  data = (input[i].split(' ')).map(Number)
  for(let j = 1; j <= data[0]; j++){
    average += data[j]
  }
  average /= data[0]

  for(let j = 1; j <= data[0]; j++){
    count = data[j] > average ? count+1: count
  }

  console.log(`${((count/data[0])*100).toFixed(3)} %`)
}