// 2-3. 단어 정렬

// 나의 풀이
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}
// 사전 순으로 먼저 정렬
arr.sort();

arr.sort((a, b) => {
  // 길이가 같으면 순서 그대로
  if (a.length === b.length) {
    return 0;
    // 길이 순으로 정렬
  } else if (a.length > b.length) {
    return 1;
  } else {
    return -1;
  }
});

// 중복 문자열 제거를 위해 Set으로 변환
strSet = new Set(arr);

let answer = "";
for (const str of strSet) {
  answer += str + "\n";
}

console.log(answer.trim());

// 강의 풀이
/* 
정렬한 다음에 set으로 만들지 말고 set으로 만든 뒤 배열로 다시 변환하고 정렬한다는 차이가 있음
시간 복잡도를 줄이기 위해서는 중복을 먼저 제거하는 것이 좋을 것 같다.
나는 사전 순으로 먼저 정렬한 뒤에 길이로 정렬을 했는데
강의에서는 한번에 정렬한 차이가 있다.
 */
arr.sort((a, b) => {
  // 길이가 같으면 길이가 짧은 것이 우선
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    // 길이가 같으면 사전 순으로 정렬
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }
});
