let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let N = +input[0];
let dist = input[1].split(" ").map(Number);
let cost = input[2].split(" ").map(Number);

//강의 답안 봄

//money를 비오름차순이 되도록 만듦
//ex [5,2,4,1] -> [5,2,2,1] (0번 제외/a랑 b랑 비교해서 더 작은 것으로 교체)
let minCost = cost[0];
for (let i = 0; i < N; i++) {
  minCost = Math.min(minCost, cost[i]);
  cost[i] = minCost;
}

//도로 당 이동 비용의 합 계산

//BigInt 쓰는 이유: 거리가 최대 10억km라고 했기 때문
let answer = BigInt(0);
for (let i = 0; i < N - 1; i++) answer += BigInt(dist[i]) * BigInt(cost[i]);

//BigInt를 사용함으로써 뒤에 붙는 n을 제거하기 위해 String 사용
console.log(String(answer));
