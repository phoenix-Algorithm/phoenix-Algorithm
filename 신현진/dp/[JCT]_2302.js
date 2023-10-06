let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
/*let [n, m, ...fixed] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (n != m && m != 0) {
  //1부터 n까지 채워줌
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  //맨 처음 vip 이전까지의 arr의 길이
  let answer = fixed[0] != 1 ? arr.slice(0, fixed[0] - 1).length : 1;

  //각 vip 사이의 arr
  for (let i = 0; i < m - 1; i++) {
    let vip = fixed[i];
    let nextVip = fixed[i + 1];
    let pieceArr = arr.slice(vip, nextVip - 1);
    if (pieceArr.length != 0) answer *= pieceArr.length;
  }

  //맨 마지막 vip 이후의 arr
  let lastPieceArr = arr.slice(fixed[fixed.length - 1]);
  if (lastPieceArr.length != 0) answer *= lastPieceArr.length;
  console.log(answer);
}
//m이 0일 때 -> n! 출력
else if (m == 0) {
  let answer = 1;
  for (let i = 1; i <= n; i++) answer *= i;
  console.log(answer);
}
//m이 n이랑 같을 때 -> 전부 다 vip라는 뜻 => 경우는 1개뿐이므로 1 출력
else console.log(1);
*/

//강의 답안
let input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

let n = +input[0];
let m = +input[1];

let d = new Array(50).fill(0);
d[0] = 1;
d[1] = 1;
d[2] = 2;

function dp(x) {
  if (d[x] != 0) return d[x];
  d[x] = dp(x - 1) + dp(x - 2);
  return d[x];
}

//vip 좌석을 기준으로 몇 개씩 묶이는지 확인
//각각의 그룹마다 속한 사람의 수
let arr = [];
let start = 0;
for (let i = 2; i < m + 2; i++) {
  end = +input[i];
  arr.push(end - 1 - start);
  start = end;
}
arr.push(n - start);
//console.log(arr);

//각 묶음의 개수에 대해 dp 테이블의 값 가져오기
let res = 1;
for (let x of arr) {
  res *= dp(x);
}
console.log(res);
