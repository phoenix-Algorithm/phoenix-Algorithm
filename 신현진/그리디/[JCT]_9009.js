let fs = require("fs");
let [T, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < T; i++) {
  let num = input[i];
  let arr = [];
  let result = [];
  arr[0] = 0;
  arr[1] = 1;

  //input[i]보다 작은 수까지 피보나치 수열 arr 만들기

  /**메모리 초과
  for (let j = 2; j <= num; j++) {
    arr[j] = arr[j - 1] + arr[j - 2];
  }
   arr.slice(0, arr.length - 1);
   */

  while (arr[arr.length - 1] <= num) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  arr = arr.slice(0, arr.length - 1);

  //최소 수의 피보나치 수 구하는 부분
  //arr 맨 뒤부터 (제일 큰 수부터 시작)
  for (let k = arr.length - 1; k >= 0; k--) {
    if (arr[k] <= num) {
      result.push(arr[k]);
      num -= arr[k];
    }
    //계속 빼다가 num이 0이 되면 탈출
    if (num == 0) break;
  }
  console.log(result.sort((a, b) => a - b).join(" "));
}
