//BOJ거리
//답안 봄

let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
/*let [n, arr] = fs.readFileSync(path).toString().trim().split("\n");
n = +n;
arr = arr.split("");

let energy = 0;
let start = 0;
let bojArr = ["B", "O", "J"];
let bojIdx = 1;
let nextText = bojArr[bojIdx];

function solution(energy, start, bojIdx, nextText) {
  while (start < n - 1) {
    let found = false;

    for (let i = start + 1; i < arr.length; i++) {
      console.log("i: ", i);
      console.log("start: ", start);
      if (arr[i] == nextText) {
        energy += (i - start) ** 2;
        bojIdx++;
        if (bojIdx > 2) bojIdx = 0;
        nextText = bojArr[bojIdx];
        start = i;
        found = true;
        break;
      }
    }

    if (!found) {
      return -1;
    }
  }
  return energy;
}

console.log(solution(energy, start, bojIdx, nextText));*/

const input = fs.readFileSync(path).toString().trim().split("\n");
const n = +input[0];
const street = input[1].split("");
const max_num = 9999999;

//각 위치에 도달하는 데 필요한 최소 비용
const dp = new Array(n).fill(max_num);
dp[0] = 0;

//현재 위치:x -> 이전 boj 위치 반환
function prevPosition(x) {
  if (x === "B") {
    return "J";
  } else if (x === "O") {
    return "B";
  } else if (x === "J") {
    return "O";
  }
}

for (let i = 1; i < n; i++) {
  const prev = prevPosition(street[i]);

  for (let j = 0; j < i; j++) {
    if (street[j] === prev) {
      dp[i] = Math.min(dp[i], dp[j] + Math.pow(i - j, 2));
    }
  }
}

const result = dp[n - 1] !== max_num ? dp[n - 1] : -1;
console.log(result);
