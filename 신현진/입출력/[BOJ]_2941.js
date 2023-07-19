let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function sol(str) {
  for (let v of croatia) str = str.replaceAll(v, "*");
  return str.length;
}

console.log(sol(input));
