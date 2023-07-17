let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('test.txt').toString().split('\n');
let str = '';
let c = Number(input[0]);
for (let i = 1; i <= c; i++) {
  let data = input[i].split(' ').map(Number);
  let [n, ...score] = data;
  let av = score.reduce((a, b) => a + b) / n;
  let stu = score.filter((s) => s > av);
  let result = (stu.length / score.length) * 100;
  result = result.toFixed(3);
  if (input.length - 1 === i) {
    str += `${result}%`;
  } else {
    str += `${result}%\n`;
  }
}
console.log(str);
