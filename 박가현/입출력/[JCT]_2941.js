let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let str = ['c=', 'c-', 'd-', 'lj', 'nj', 's=', 'dz=', 'z='];
for (const s of str) {
  while (input.indexOf(s) !== -1) {
    input = input.replace(s, 'k');
  }
}
console.log(input.length);
