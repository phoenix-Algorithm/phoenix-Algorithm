let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let data = input.map((ele) => {
  return Number(ele) % 42;
});

let result = new Set(data);
console.log(result.size);
