let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let stack = [];
let str = '';
let tag = false;
const stackPop = () => {
  while (stack.length !== 0) {
    str += stack.pop();
  }
}; // stack을 pop하는 함수
for (const i of input) {
  if (tag) {
    if (i === '>') {
      tag = false;
    }
    str += i;
  } // 태그 안을 순회하는 거
  else if (i === '<') {
    stackPop();
    tag = true;
    str += i;
  } // 태그를 만난거
  else if (i === ' ') {
    stackPop();
    str += ' ';
  } // 공백을 만나면 단어 종료 stack Pop
  else {
    stack.push(i);
  }
}

while (stack.length !== 0) {
  str += stack.pop();
} // 남아있는 stack 모두 pop
console.log(str);
