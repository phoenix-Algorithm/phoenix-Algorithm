let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);
let newArr = [...new Set(arr)].sort((a, b) => a - b);

/** 메모리초과
let answer = "";

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  let num = arr.shift();
  let newArr = [...new Set(arr)].sort((a, b) => a - b);
  for (let j = 0; j < newArr.length; j++) {
    if (num > newArr[j]) count++;
    else break;
  }
  answer += count + " ";
  arr.push(num);
}

console.log(answer);*/

/**시간초과
let newArr = [...new Set(arr)].sort((a, b) => a - b);

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += newArr.indexOf(arr[i]) + " ";
}
console.log(answer);
 */

let map = new Map();
for (let i = 0; i < newArr.length; i++) {
  map.set(newArr[i], i);
}

let answer = "";
for (x of arr) answer += map.get(x) + " ";
console.log(answer);
