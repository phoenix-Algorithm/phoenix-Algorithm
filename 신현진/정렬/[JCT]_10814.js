let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

input.shift();
let arr = [];
for (let i = 0; i < input.length; i++) {
  arr[i] = input[i].split(" ");
  arr[i][0] = Number(arr[i][0]);
}

arr.sort((a, b) => a[0] - b[0]).map((v) => console.log(v.join(" ")));
