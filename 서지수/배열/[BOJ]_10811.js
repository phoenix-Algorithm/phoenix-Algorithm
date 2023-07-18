// 바구니 뒤집기

let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("input.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let a = Array(N)
  .fill()
  .map((arr, i) => i + 1);

for (let k = 1; k <= M; k++) {
  const [i, j] = input[k].split(" ").map(Number);
  tempA = a.slice(i - 1, j);
  console.log("임시 배열: ", tempA);
  for (let l = i - 1; l < j; l++) {
    console.log("l, j -1 - l: ", l, j - 1 - l);
    console.log("a[l], tempA[j -1 - l]: ", a[l], tempA[j - 1 - l]);
    a[l] = tempA[j - 1 - l];
  }
  console.log("바뀐 배열: ", a);
}

console.log(a.join(" "));

// 못했음
// 맞혔는데 join(" ") 안해서 틀린 거였음...

// 블로그 정답
// reverse()- 순서를 거꾸로 만들어 줌
// splice(변경을 시작할 인덱스, 배열에서 제거할 요소의 수, 배열에 추가할 요소)
// 위 두가지를 사용
for (let k = 1; k <= M; k++) {
  const [i, j] = input[k].split(" ").map(Number);
  tempA = a.slice(i - 1, j);
  tempA.reverse();
  a.splice(i - 1, j - i + 1, ...tempA);
}

console.log(a);
