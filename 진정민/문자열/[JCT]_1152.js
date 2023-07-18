// 1152 단어의 개수

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split(' '); 

if(input == ''){
  console.log(0)
}else{
  console.log(input.length)  
}
