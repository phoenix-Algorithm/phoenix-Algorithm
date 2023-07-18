// 4. 그룹 단어 체커

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("input.txt").toString().split("\n");

// 강의 정답 코드

// 그룹 단어인지 체크하는 함수
function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    // 오른쪽 단어와 다르다면
    if (data[i] != data[i + 1]) {
      // 이미 등장한 적 있는 알파벳이라면
      if (setData.has(data[i + 1])) {
        return false;
      }
      // 등장한 적 없는 알파벳이라면
      else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}

const tc = Number(input[0]);
let answer = 0;

for (let i = 1; i <= tc; i++) {
  const s = input[i];
  if (check(s)) {
    answer += 1;
  }
}

console.log(answer);
