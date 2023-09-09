// 4-1. 텀 프로젝트

// 나의 풀이 - 메모리 초과
// 강의 해설을 보면 이미 방문한 것은 또 탐색하지 않고 중간에 사이클이 생기면 방문한 노드 중에서 사이클을 찾는데
// 제 풀이는 시작과 끝이 다르면 다시 다음 노드를 시작으로 또 재귀를 호출하기 때문에 메모리 초과가 나는 것 같습니다.
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const testCase = Number(input[0]);
for (let tc = 1; tc <= testCase * 2; tc += 2) {
  const n = Number(input[tc]);
  const arr = [0];
  // 각 학생이 선택한 학생 번호
  arr.push(...input[tc + 1].split(' ').map(Number));
  // 팀 결성 여부
  let teamed = new Array(n + 1).fill(false);

  const dfs = (node, start, visited, team) => {
    visited[node] = true;
    // start랑 값이 다르면 아직 team이 아니므로 계속 탐색
    if (start !== arr[node]) {
      team.push(arr[node]);
      // 방문하지 않고 팀 결성이 안된 노드만 탐색
      if (!visited[arr[node]] && !teamed[arr[node]]) {
        dfs(arr[node], start, visited, team);
      }
    } else {
      // 시작한 노드랑 다음 갈 노드가 같으면 팀이 됐으니 teamd true로 변경
      for (t of team) {
        teamed[t] = true;
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    let visited = new Array(n + 1).fill(false);
    let team = [i];
    if (!teamed[i]) {
      dfs(i, i, visited, team);
    }
  }

  let count = 0;
  for (let c = 1; c < teamed.length; c++) {
    if (teamed[c] === false) {
      count++;
    }
  }
  console.log(count);
}

// 강의 답안
function dfs(x, graph, visited, finished, result) {
  visited[x] = true;
  let y = graph[x];
  if (!visited[y]) {
    dfs(y, graph, visited, finished, result);
  } else if (!finished[y]) {
    while (y != x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
}

let testCases = Number(input[0]);
let line = 1;
while (testCases--) {
  let n = Number(input[line]);
  let graph = [0, ...input[line + 1].split(' ').map(Number)];
  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];

  for (let x = 1; x <= n; x++) {
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }

  line += 2;
  console.log(n - result.length);
}
