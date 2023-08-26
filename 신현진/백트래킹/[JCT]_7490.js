//강의답안 봄

let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let t = +input[0];
let n = 0;

let arr = [];

//각각의 테스트 케이스를 처리하기 위함
for (let tc = 1; tc <= t; tc++) {
  n = +input[tc];
  arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  dfs([], 0);
  console.log();
}

function dfs(result, depth) {
  //연산자 개수= 숫자 개수보다 하나 작음
  if (depth == n - 1) {
    //현재 수식의 문자열
    let str = "";
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i];
    //마지막 위치에 마지막 수가 들어갈 수 있도록 함
    str += arr[n - 1] + "";
    console.log("str: " + str);
    //공백 제거 후 수식 계산 (eval -> '1+2' 문자열을 그대로 계산해줌)
    current = eval(str.split(" ").join(""));
    //수식 결과가 0이되면 출력
    if (current == 0) console.log(str);
    return;
  }

  for (let x of [" ", "+", "-"]) {
    result.push(x);
    dfs(result, depth + 1);
    result.pop();
  }
}
