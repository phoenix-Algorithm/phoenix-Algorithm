let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let h = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let n = Number(input[1]);
if (m + n < 60) {
  m += n;
} else {
  m += n;
  h += parseInt(m / 60);
  m = m % 60;
  if (h > 23) {
    h -= 24;
  }
}
console.log(h + ' ' + m);
