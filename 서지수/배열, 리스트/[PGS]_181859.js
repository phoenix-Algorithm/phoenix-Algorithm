// 배열 만들기 6

function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer.length === 0) {
      answer.push(arr[i]);
    } else {
      if (answer[answer.length - 1] === arr[i]) {
        answer.pop();
        continue;
      } else {
        answer.push(arr[i]);
      }
    }
  }
  if (answer.length === 0) {
    answer = [-1];
  }
  return answer;
}

// 남의 풀이
// 반복문을 사용하지 않고 foreach를 사용해서 arr와 stk의 마지막 원소를 비교한다.
function solution(arr) {
  let stk = [];
  arr.forEach((x, i) => {
    if (stk[stk.length - 1] === x) {
      stk.pop();
    } else {
      stk.push(x);
    }
  });

  if (stk.length === 0) {
    stk = [-1];
  }
  return stk;
}
