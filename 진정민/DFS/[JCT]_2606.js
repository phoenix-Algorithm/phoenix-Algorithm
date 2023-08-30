// 처음에 런타임 에러(Type Error) 난 코드인데
// 맞았다고 생각해서 fs 모듈 문제인가 계속 수정해보다
// 강의 보고 graph 마느는 코드 수정하니 에러가 없어지더라고요
// 뭐가 문제였을까요? ㅠ push 배열 길이나 변수 m을 사용하지 않은 둘 중 하나 같은데

// let n = Number(input[0])
// // 컴퓨터 그래프 인접리스트 만들기
// let graph = []
// for(let i = 0; i<n; i++){ // << 여기랑
//   graph.push([])
// }
// for(let i = 2; i<n; i++){ // << 여기 문제였던 것 같습니다.
//   let [a, b] = input[i].split(" ").map(Number)
//   graph[a].push(b)
//   graph[b].push(a)
// }
// let visited = new Array(n).fill(false)

// let cnt = 0;
// function dfs(graph, v, visited){
//   visited[v] = true
//   cnt++;

//   for(i of graph[v]){
//     if(!visited[i]){
//       dfs(graph,i,visited)
//     }
//   }
// }

// dfs(graph, 1, visited)
// console.log(cnt-1)

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);
let m = Number(input[1]);
// 컴퓨터 그래프 인접리스트 만들기
let graph = [];
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}
for (let i = 2; i <= m + 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
let visited = new Array(n + 1).fill(false);

let cnt = 0;
function dfs(graph, v, visited) {
  visited[v] = true;
  cnt++;

  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

dfs(graph, 1, visited);
console.log(cnt - 1);
