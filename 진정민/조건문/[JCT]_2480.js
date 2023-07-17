// 2480 주사위 세개

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let dice = input[0].split(' ');


for(let i=0; i<dice.length; i++){
  dice[i] =  Number(dice[i]);
}


if(dice[0]==dice[1] && dice[1]==dice[2]){
  console.log(10000+dice[0]*1000);
}else if(dice[0] ==  dice[1]){
  console.log(1000+dice[0]*100)
}else if(dice[0] ==  dice[2]){
  console.log(1000+dice[0]*100)
}else if(dice[1] ==  dice[2]){
  console.log(1000+dice[1]*100)
}else{
  console.log(Math.max(dice[0],dice[1],dice[2]) * 100)
}

