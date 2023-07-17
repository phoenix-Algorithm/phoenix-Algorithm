let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let count = Number(input[0]);
let num = 0;
for (let i = 1; i < count + 1; i++) {
  let str = input[i];
  for (let a = 0; a < str.length; a++) {
    if (str.length !== a + 1) {
      if (str[a] === str[a + 1]) {
        continue;
      } else {
        if (str.indexOf(str[a], a + 1) !== -1) {
          break;
        }
      }
    } else {
      num += 1;
    }
  }
}
console.log(num);
1;
let fs;
