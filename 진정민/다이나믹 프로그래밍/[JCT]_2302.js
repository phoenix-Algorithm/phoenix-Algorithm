// 다 풀어놓고 .trim() 안 해줘서 30분 낭비했습니다...
// 처음 접근할 때 vip 좌석을 기준으로 나눠서 각 구획별 경우의 수를 곱해주면 되겠다 싶었습니다.
// 그래서 구획별 경우의 수를 구해보니 피보나치 수열이어서 구획별 범위를 기록하고
// 수열 만들어서 곱해줘서 풀었습니다.
// m의 범위가 0~n 이어서 0도 고려해서 풀어줬습니다.

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let [n, m, ...arr] = input.map(Number);

// m이 0일 때 고려
if (m == 0) {
  let fibo = [1, 1];

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  console.log(fibo[n]);
} else {
  // vip를 기준으로 구획별 범위 기록
  let distArr = [];

  distArr.push(arr[0] - 1);
  for (let i = 1; i < arr.length; i++) {
    let dist = arr[i] - arr[i - 1] - 1;
    distArr.push(dist);
  }
  distArr.push(n - arr[arr.length - 1]);

  // 피보나치 수열을 어디까지 계산할지 구하기 위해 정렬해줬습니다.
  distArr.sort((a, b) => a - b);

  let fibo = [1, 1];

  for (let i = 2; i <= distArr[distArr.length - 1]; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  // 답
  let answer = 1;
  for (x of distArr) {
    answer *= fibo[x];
  }

  console.log(answer);
}
