//못풀었음
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);

/**분으로 바꾸어서 풀기 */
let total = a * 60 + b + c;
/**하루는 1440분 */
total %= 1440;

console.log(parseInt(total / 60), total % 60);
