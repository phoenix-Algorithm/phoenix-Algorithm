let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let num = Number(input[0].split(' ')[0]);
let count = Number(input[0].split(' ')[1]);
let array = [];

for (let i = 1; i < num + 1; i++) {
  array.push(i);
}
for (let i = 1; i < count + 1; i++) {
  let ar = input[i].split(' ').map(Number);
  let a = ar[0] - 1;
  let b = ar[1];
  let temp = array.slice(a, b);
  temp = temp.reverse(); // 잘라서 배열을 만듦
  let c = 0;
  for (let k = a; k < b; k++) {
    array[k] = temp[c];
    c += 1;
  }
}
const str = array.join(' ');
console.log(str);
