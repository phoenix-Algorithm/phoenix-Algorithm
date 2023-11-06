//트리
//답안 봄
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

let n = +input[0];
let parentNodes = input[1].split(" ").map(Number);
let removeNode = +input[2];
let graph = [];
let answer = 0;
let rootNode;

parentNodes.forEach((parentNode, idx) => {
  if (parentNode == -1) {
    rootNode = idx;
    return;
  }
  if (!graph[parentNode]) graph[parentNode] = [];
  graph[parentNode].push(idx);
});

// console.log(graph);

const dfs = (node) => {
  if (rootNode === removeNode) return 0;
  if (!graph[node]) {
    answer++;
    return;
  }
  graph[node].forEach((nodeNum) => {
    //현재 노드 중에서 삭제해야 할 노드가 있을 때
    if (nodeNum === removeNode) {
      //현재 노드의 길이가 1 => 현재 노드의 노드가 삭제해야 할 노드 하나 뿐이면
      //그 노드를 삭제하면 현재 노드는 리프 노드가 되므로 answer++
      if (graph[node].length === 1) answer++;
      return;
    }
    dfs(nodeNum);
  });
  return answer;
};

console.log(dfs(rootNode));
