// 9009 : 피보나치 수
// 시간 초과 해결을 못해서 결국 강의 코드를 작성함..

// let fs = require("fs");
// let input = fs.readFileSync("index.txt").toString().trim().split("\n").map(Number)

// let n = input[0]

// let arr = [0,1]

// for(let i = 1; i<=n; i++){
//   let answer = []

//   while(input[i] > arr[arr.length-1]){
//     arr.push(arr[arr.length-1]+arr[arr.length-2])
//   }

//   arr.pop()

//   while(input[i] > 0){
//     for(let j = arr.length-1; j>0; j--){
//       if(input[i]>=arr[j]){
//         input[i] -= arr[j];
//         answer.push(arr[j])
//         continue;
//       }else{
//         arr.pop()
//       }
//     }
//   }

//   answer.reverse()
//   console.log(answer.join(" "))

//   arr = [0, 1]
//   answer = []
// }

let fs = require("fs");
let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

pibo = [];
pibo.push(0);
pibo.push(1);
while (pibo[pibo.length - 1] < 1e9)
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);

let testCases = Number(input[0]);
for (let tc = 1; tc <= testCases; tc++) {
  let n = Number(input[tc]);
  let result = [];
  let i = pibo.length - 1; // 가장 큰 피보나치 수의 인덱스
  while (n > 0) {
    // n이 0이 될 때까지
    if (n >= pibo[i]) {
      // 가능한 큰 피보나치 수부터 빼기
      n -= pibo[i];
      result.push(pibo[i]);
    }
    i--;
  }
  let answer = "";
  for (let i = result.length - 1; i >= 0; i--) answer += result[i] + " "; // 오름차순 출력
  console.log(answer);
}
