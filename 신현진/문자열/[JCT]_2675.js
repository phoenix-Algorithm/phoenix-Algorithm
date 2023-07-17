let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let testCase = ~~input[0];
for (let i = 0; i < testCase; i++) {
  let data = input[i + 1].split(" ");
  let num = data[0];
  let str = data[1].split("");

  let res = "";

  for (let j = 0; j < str.length; j++) {
    res += str[j].repeat(num);
  }

  console.log(res);
}
