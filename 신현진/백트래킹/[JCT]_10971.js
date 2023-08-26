//강의답안 봄
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let n = +input[0];
let graph = [];

//인덱스를 1부터 시작하기 위해서 각각 행과 열에 0을 넣어줌
for (let i = 0; i <= n; i++) graph.push([0]);
for (let i = 1; i <= n; i++) {
  line = input[i].split(" ").map(Number);
  for (let j = 0; j < n; j++) graph[i].push(line[j]);
}
//n의 최댓값이 10인데 0을 넣어줬기 때문에 visited의 길이는 11
//let visite d = new Array(11).fill(false);
//=> n+1 넣어줘도 맞다고 판정
let visited = new Array(n + 1).fill(false);
let result = [];
//1*109 = 1000000000, 최솟값 찾는것이기 때문에 일부러 큰 수로 넣어둠
let minValue = 1e9;

//1에서 시작한다고 가정하고, 2부터 N까지의 수를 하나씩 골라 나열하는 모든 순열을 계산
function dfs(depth) {
  //마지막 노드는 어차피 처음 노드로 가야함
  if (depth == n - 1) {
    let totalCost = 0;
    //1번 노드에서 출발
    let cur = 1;
    //현재 순열에 따라서 노드 이동
    for (let i = 0; i < n - 1; i++) {
      //다음 이동 노드까지의 비용을 계산
      let nextNode = result[i];
      let cost = graph[cur][nextNode];
      //이동이 불가능하면 그냥 무시한다
      if (cost == 0) return;
      //이동이 가능하면 비용을 더하고 노드를 이동시킨다
      totalCost += cost;
      cur = nextNode;
    }
    //마지막 노드에서 1로 다시 되돌아오는 것이 필수
    let cost = graph[cur][1];
    if (cost == 0) return;
    totalCost += cost;
    console.log(totalCost);
    //경로의 최소 비용 저장
    minValue = Math.min(minValue, totalCost);
  }
  for (let i = 2; i <= n; i++) {
    if (visited[i]) continue;
    result.push(i);
    visited[i] = true;

    dfs(depth + 1);
    result.pop();

    visited[i] = false;
  }
}

dfs(0);
console.log(minValue);
