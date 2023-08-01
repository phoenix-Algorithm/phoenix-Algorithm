let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let stack = [];
let i = 0;
let k = 0;
N = Number(N);
let NO = false;
input = input.map(Number);
let str = '';

//1부터 push 하다가 input 값을 만나면 pop
while (true) {
  if (input[i] < stack[stack.length - 1]) {
    console.log('NO');
    NO = true;
    break;
  } // 현재 input안에 요소가 stack에서 pop될 수보다 작다면 No
  while (input[i] === stack[stack.length - 1] && i < N) {
    // 지금 stack에 push한 값이 input[i]랑 같고 N보다 작을 때
    stack.pop();
    str += '-' + '\n';
    i++;
  }
  if (i > N - 1) {
    //  N은 7
    break;
  }

  k += 1;
  stack.push(k);
  str += '+' + '\n';
  //stack에 값을 하나씩 push
}
if (!NO) {
  console.log(str.trim());
  //  str에 마지막 문자를 더 할 때 불필요한 공백이 포함돼 trim을 했습니다
}
