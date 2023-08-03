// 스택 수열

// 내 풀이
// 백준에서 틀린 것으로 나옴
const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n").map(Number);

const [n, ...inputArr] = input;
// 스택 생성
let stack = [];
// 입력받은 배열의 인덱스
let idx = 0;
// 스택에서 pop한 결과
let resultArr = [];
// 답을 담기 위한 배열
let answer = [];

// push() 함수
const pushFunc = (num) => {
  stack.push(num);
  answer.push("+");
};

// pop() 함수
const popFunc = (num) => {
  resultArr.push(stack.pop());
  answer.push("-");
  idx++;
};

for (let i = 1; i <= n; i++) {
  if (inputArr[idx] === i) {
    // 입력받은 값과 같다면 스택에 push했다가 pop
    pushFunc(i);
    popFunc();
  } else if (inputArr[idx] > i) {
    // 입력받은 값이 더 크다면 push
    pushFunc(i);
  } else {
    // 입력받은 값이 작다면 pop
    popFunc();
    pushFunc(i);
  }
}
// 아직 스택에 남은 값 pop
while (stack.length > 0) {
  popFunc();
}

if (JSON.stringify(resultArr) === JSON.stringify(inputArr)) {
  // 입력받은 배열과 pop해서 나온 결과가 같다면 결과 출력
  console.log(answer.join("\n"));
} else {
  // 다르다면 "NO" 출력
  console.log("NO");
}

// 블로그 풀이
// https://velog.io/@rkio/백준-Javascript-1874
// 나는 스택에 넣을 값으로 반복문을 돌렸는데
// 이 풀이는 입력받은 길이만큼 반복문을 돌아서
// 입력 값보다 stack에 넣을 값이 작으면 계속 스택에 넣고
// stack보다 커지면 pop해서 동일한지 비교하여
// 동일하지 않으면 종료하는 방식으로 구현했다.

// 스택 생성
let stack2 = [];
// 스택에 넣을 값
let stackNum = 1;
// 답을 담기위한 배열
let answer2 = [];

for (let i = 0; i < n; i++) {
  let inputNum = inputArr[i];

  while (stackNum <= inputNum) {
    // 만약 입력 받은 값보다 스택에 넣을 값이 클 때까지 push한다.
    stack2.push(stackNum);
    stackNum++;
    answer2.push("+");
  }

  // 스택에서 pop한다.
  let stackPop = stack2.pop();
  answer2.push("-");

  // 스택에서 pop한 값과 입력받은 값이 다르다면 "NO"를 출력하고 종료한다.
  if (stackPop !== inputNum) {
    answer2 = ["NO"];
    break;
  }
}

console.log(answer2.join("\n"));
