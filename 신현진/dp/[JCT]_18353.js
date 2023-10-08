//병사 배치하기
//강의답안 봄
//가장 긴 증가하는 부분수열 (LIS) 사용
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");
let n = +input[0];
let arr = input[1].split(" ").map(Number);

//순서를 뒤집어줌 -> 오름차순으로 만들기 (LIS를 위해)
arr.reverse();

//부분 수열 중에서 가장 길이가 긴 것을 넣기
let dp = new Array(n).fill(1);

//LIS 수행
for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    //자신의 왼쪾에 있는 값이 자신의 값보다 작을 때
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

//console.log(dp);

//n에서 가장 긴 증가하는 부분수열의 길이 빼주기
console.log(n - Math.max(...dp));
