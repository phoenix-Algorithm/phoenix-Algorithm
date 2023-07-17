let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let testCase = ~~input[0];

let data = input[1].split(" ").map(Number);
let newScore = data.map((v) => (v / Math.max.apply(Math, data)) * 100);

console.log(newScore.reduce((a, b) => a + b) / testCase);
