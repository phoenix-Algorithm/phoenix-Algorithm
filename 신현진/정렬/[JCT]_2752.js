let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split(" ");

console.log(input.sort((a, b) => a - b).join(" "));
