// 10828 스택

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

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
      answer.push(arr[arr.length-1])
      arr.pop() 
    }
  }else if(a === "size"){
    answer.push(arr.length)
  }else if(a === "empty"){
    answer.push(arr.length === 0 ? 1 : 0)
  }else if(a === "top"){
    answer.push(arr.length === 0 ? -1 : arr[arr.length-1])
  }
}

console.log(answer.join("\n"))