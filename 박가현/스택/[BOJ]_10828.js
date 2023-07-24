let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let stack = [];
let str = '';
for (let i = 0; i < n + 1; i++) {
  let arr = input[i].trim().split(' '); // 명령어를 배열로
  if (arr[0] === 'push') {
    stack.push(Number(arr[1]));
  } else if (arr[0] === 'top') {
    stack.length !== 0
      ? (str += stack[stack.length - 1] + '\n')
      : (str += -1 + '\n');
  } else if (arr[0] === 'empty') {
    stack.length === 0 ? (str += 1 + '\n') : (str += 0 + '\n');
  } else if (arr[0] === 'pop') {
    stack.length === 0 ? (str += -1 + '\n') : (str += stack.pop() + '\n');
  } else if (arr[0] === 'size') {
    str += stack.length + '\n';
  }
}
console.log(str);
