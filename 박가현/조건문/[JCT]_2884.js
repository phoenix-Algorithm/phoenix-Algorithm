let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let a = input.split(' ');
let h = Number(a[0]);
let m = Number(a[1]);
if (m >= 45) {
  m = m - 45;
  console.log(h + ' ' + m);
} else if (m < 45 && h !== 0) {
  h = h - 1;
  m = 60 - (45 - m);
  console.log(h + ' ' + m);
} else {
  m = 60 - (45 - m);
  console.log(23 + ' ' + m);
}
