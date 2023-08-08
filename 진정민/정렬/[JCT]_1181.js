let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}

arr = [...new Set(arr)];

arr.sort((a, b) => {
  if (a.length != b.length) {
    return a.length - b.length;
  } else {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }
});

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
