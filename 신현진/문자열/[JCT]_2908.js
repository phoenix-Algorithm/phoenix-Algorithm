let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");

let num1 = ~~input[0].split("").reverse().join("");
let num2 = ~~input[1].split("").reverse().join("");

console.log(Math.max(num1, num2));
