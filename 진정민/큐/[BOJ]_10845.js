// 10845 큐

let fs = require('fs');
let input = fs.readFileSync('dev/stidin').toString().split('\n');

let N = Number(input[0]);
let arr = []
let answer = []

for (let i = 1; i <= N; i++) {
  [a, b] = input[i].split(" ")

  if(a === "push"){
    arr.push(Number(b))
  }else if(a === "pop"){
    if(arr.length === 0){
      answer.push(-1)
    }else{
      answer.push(arr[0])
      arr.shift() 
    }
  }else if(a === "size"){
    answer.push(arr.length)
  }else if(a === "empty"){
    answer.push(arr.length === 0 ? 1 : 0)
  }else if(a === "back"){
    answer.push(arr.length === 0 ? -1 : arr[arr.length-1])
  }else if(a === "front"){
    answer.push(arr.length === 0 ? -1 : arr[0])
  }
}

console.log(answer.join("\n"))