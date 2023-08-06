// 18870 좌표 압축

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < uniqueArray.length; i++) {
  myMap.set(uniqueArray[i], i);
}

answer = "";
for (x of arr) answer += myMap.get(x) + " ";
console.log(answer);
