// 한 2시간 걸린 것 같은데
// 처음에 줄 마다 경우의 수를 구하는데 2^n이어서 이게 key다 싶었는데
// 복잡해지기만 하고 n = 500일 땐 말도 안 되길래 다시 고민했습니다.

// 그냥 n-1 번째 각 숫자에서 최댓값을 구해놓고
// 다음 n번째에선 그 최댓값들을 바탕으로 다시 최댓값을 구한 다음에
// 마지막에 나온 dx 중 최댓값을 구해 풀었습니다.

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);

let dx = new Array(n).fill(0);

dx[0] = Number(input[1]);

for (let i = 1; i < n; i++) {
  let arr = input[i + 1].split(" ").map(Number);

  // 처음과 끝은 어차피 경우의 수가 항상 1이라 바로 넣어주고
  arr[0] += dx[0];
  arr[arr.length - 1] = dx[arr.length - 2] + arr[arr.length - 1];

  // 중간 값들은 각 2가지 경우의 수가 있어 따로 계산해주었습니다.
  for (let j = 1; j < arr.length - 1; j++) {
    arr[j] += Math.max(dx[j - 1], dx[j]);
  }

  dx = arr;
}

// 어차피 최댓값 구하려면 배열 전체를 돌아야 하기 때문에 그냥 정렬 후 최댓값 뽑았습니다.
dx.sort((a, b) => a - b);
console.log(dx[dx.length - 1]);
