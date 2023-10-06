//강의답안 봄
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

let n = +input[0];

let dp = [];

//삼각형 값 넣기
for (let i = 1; i <= n; i++) {
  let data = input[i].split(" ").map(Number);
  dp.push(data);
}

//2번째 줄부터 내려가면서 확인
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    //왼쪽 위에서 내려오는 경우
    let upLeft = 0;
    if (j != 0) upLeft = dp[i - 1][j - 1];
    //바로 위에서 내려오는 경우
    let up = 0;
    if (j != i) up = dp[i - 1][j];
    //최대 합 저장
    dp[i][j] = dp[i][j] + Math.max(upLeft, up);
  }
}
console.log(dp);

console.log(Math.max(...dp[n - 1]));
