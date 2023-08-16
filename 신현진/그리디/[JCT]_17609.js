//강의 답안 봄

let fs = require("fs");

//그대로 들어가면 input의 각 요소에 \r도 들어가기 때문에 map 사용
let [t, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((v) => v.trim());

//회문인지 판별하는 함수
function palindrome(x) {
  return x == x.split("").reverse().join("");
}

for (let i = 0; i < t; i++) {
  let data = input[i];
  //회문이면 0 출력
  if (palindrome(data)) console.log(0);
  else {
    let found = false;
    let n = data.length;
    //data.length의 절반까지만 탐색
    for (let j = 0; j < parseInt(n / 2); j++) {
      //대칭이 아닌 인덱스를 찾은 경우
      if (data[j] != data[n - j - 1]) {
        //앞 쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (palindrome(data.slice(0, j) + data.slice(j + 1, n))) found = true;
        //뒤 쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (palindrome(data.slice(0, n - j - 1) + data.slice(n - j, n)))
          found = true;
        break;
      }
    }
    if (found) console.log(1);
    else console.log(2);
  }
}
