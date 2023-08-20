// 13305 : 주유소

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let dist = input[1].split(" ").map(Number);
let cost = input[2].split(" ").map(Number);

let minCost = cost[0];

// 이전 주유소의 가격이 싸면 미리 넣는 알고리즘 배열
for (let i = 1; i < cost.length; i++) {
  if (cost[i] < minCost) {
    minCost = cost[i];
    continue;
  }
  cost[i] = minCost;
}

// 여기서 처음에 BigInt와 String을 사용하지 않고 제출했는데
// 58점이 나와서 이유를 알아봐야겠다.
let answer = BigInt(0);

for (let i = 0; i < dist.length; i++) {
  answer += BigInt(cost[i]) * BigInt(dist[i]);
}

console.log(String(answer));
