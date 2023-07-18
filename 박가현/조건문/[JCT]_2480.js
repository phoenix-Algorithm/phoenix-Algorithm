let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
if (a === b) {
  if (b === c) {
    console.log(10000 + a * 1000);
  } // 세개 모두 같을 때
  else {
    console.log(1000 + a * 100);
  }
} else if (b === c) {
  console.log(1000 + b * 100);
} // 두개가 같을 떄
else if (a === c) {
  console.log(1000 + a * 100);
} // 두개가 같을 때
else {
  let max = Math.max(...input);
  console.log(max * 100);
}
