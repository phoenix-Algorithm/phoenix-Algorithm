// 1. StackSizeExceeded ERR를 만남
// 무한 재귀에 빠지는 현상 때문임.
// 방문 체크를 통해 해결

// 2. 메모리 초과가 남
// 복잡도 신경 안 쓰고 만들어서 날 것이라고 예상함..
// 불필요한 selected 배열을 삭제하고 answer 변수를 통해 답 구함 => 문제 해결 안 됨
// 재귀함수를 너무 많이 호출하는 게 문제인 것 같음
// ex) N = 100,000 [1, 2, ... 99999, 100000] 이렇게 돼 있으면 재귀함수 10만번씩 호출해야 함
// checkArr 배열을 없애고 메모리 초과는 해결했으나

// 3. 시간 초과가 남..
// 1시간 넘게 여러가지 시도해보았으나 해결하지 못했습니다..

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let t = Number(input[0]);
let line = 1;

let answer = 0;
let checkNum = 0;
let firstNum = 0;
let digit = 0;

function dfs(arr, i, visited) {
  if (visited[i - 1]) return;
  if (!firstNum) firstNum = i;
  // 이미 짝이 있는 경우
  if (arr[i - 1] == 0) {
    for (let j = 0; j < checkNum; j++) {
      digit = arr[firstNum - 1];
      visited[firstNum - 1] = false;
      firstNum = digit;
    }
    return;
  }

  visited[i - 1] = true;

  // 자기 자신을 가리킬 경우
  if (i == arr[i - 1]) {
    arr[i - 1] = 0;
    answer++;
    for (let j = 0; j < checkNum; j++) {
      digit = arr[firstNum - 1];
      visited[firstNum - 1] = false;
      firstNum = digit;
    }
    return;
  }

  checkNum++;

  // 연결된 배열의 첫 번째로 돌아올 경우
  if (firstNum == arr[i - 1]) {
    for (let j = 0; j < checkNum; j++) {
      digit = arr[firstNum - 1];
      arr[firstNum - 1] = 0;
      firstNum = digit;
      answer++;
    }
    visited[i - 1] = true;
    return;
  }

  if (!visited[arr[i - 1] - 1]) {
    dfs(arr, arr[i - 1], visited);
  } else {
    for (let j = 0; j < checkNum; j++) {
      digit = arr[firstNum - 1];
      visited[firstNum - 1] = false;
      firstNum = digit;
    }
  }
  firstNum = 0;
}

while (t--) {
  let n = Number(input[line]);
  line++;

  let arr = input[line].split(" ").map(Number);
  line++;
  let visited = new Array(n).fill(false);

  for (let i = 1; i <= n; i++) {
    firstNum = 0;
    checkNum = 0;
    digit = 0;
    dfs(arr, i, visited);
    visited[i - 1] = true;
  }

  console.log(n - answer);
  answer = 0;
}
