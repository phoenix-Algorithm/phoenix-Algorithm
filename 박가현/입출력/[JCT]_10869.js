let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let num1 = Number(input[0]);
let num2 = Number(input[1]);
let arr = [];
arr.push(num1 + num2);
arr.push(num1 - num2);
arr.push(num1 * num2);
arr.push(parseInt(num1 / num2));
arr.push(num1 % num2);
let answer = '';
for (let i = 0; i < arr.length; i++) {
  if (i === arr.length - 1) {
    answer += arr[i];
  } else {
    answer += arr[i] + '\n';
  }
}
console.log(answer);
