// 14681 사분면 고르기

let fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let x = Number(input[0])
let y = Number(input[1])

if(x > 0){
  if(y>0) console.log(1);
  else console.log(4);
}else{
  if(y>0) console.log(2);
  else console.log(3);
}