// 9498 시험 성적

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

input = parseInt(input)
let a = "F"

if(input<= 100 && input>= 90){
    a = "A"
}else if(input <= 89 && input>= 80){
    a = "B"
}else if(input <= 79 && input>= 70){
    a = "C"
}else if(input <= 69 && input>= 60){
    a = "D"
}


console.log(a);