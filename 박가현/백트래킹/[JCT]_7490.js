let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

function func(n) {
  let arr = []; // 순열을 계산하고자 하는 원소(element)가 담긴 배열
  let pattern = ['-', ' ', '+'];
  for (let i = 1; i <= n; i++) {
    if (i === n) {
      arr.push(i + '');
      break;
    }
    for (let j = 0; j < 3; j++) {
      arr.push(i + pattern[j]);
    }
  }
  let selected = []; // 현재 순열에 포함된 원소(element)의 인덱스
  let answerStr = [];
  function dfs(depth) {
    if (depth === arr.length) {
      let str = '';
      for (let a of selected) {
        str += a.trim();
      }
      let answer = eval(str);
      if (answer === 0) {
        answerStr.push(selected.join(''));
      }
      return;
    } else if (depth === arr.length - 1) {
      selected.push(arr[arr.length - 1]);
      dfs(arr.length);
      selected.pop();
    } else {
      for (let i = depth; i <= depth + 2; i++) {
        selected.push(arr[i]);
        dfs(depth + 3);
        selected.pop();
      }
    }
  } //dfs
  dfs(0);
  answerStr.sort();
  return answerStr.join('\n');
} //func

let answer = '';
for (let i = 1; i <= Number(input[0]); i++) {
  answer += func(Number(input[i])) + '\n' + '\n';
}

console.log(answer.trim());
