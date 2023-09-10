const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let T = +input[0]; // 테스트 케이스의 개수
let index = 1; // 현재 처리 중인 테스트 케이스의 시작 인덱스
let visited; // 각 노드의 방문 상태를 저장
let done; // 각 노드가 처리가 끝났는지의 상태를 저장
let arr; // 그래프 정보
let cnt = 0; // 사이클 내의 노드 수

while (T > 0) {
  const n = +input[index];
  const temp = input[index + 1].split(' ').map((el) => +el);
  arr = [0, ...temp];
  visited = Array(n + 1).fill(false);
  done = Array(n + 1).fill(false);

  // 모든 노드에 대해 DFS 수행
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) dfs(i);
  }

  console.log(n - cnt); // 전체 노드 수에서 사이클에 포함된 노드 수를 뺀 값을 출력

  index += 2; // 다음 테스트 케이스로 이동
  T--; // 테스트 케이스 수 감소
  cnt = 0; // 사이클 노드 카운터 초기화
}

function dfs(node) {
  visited[node] = true;
  const next = arr[node];

  if (!visited[next]) {
    // 아직 방문하지 않은 노드라면 재귀적으로 DFS 수행
    dfs(next);
  } else if (!done[next]) {
    // 이미 방문했지만 처리가 끝나지 않은 노드를 만나면 사이클이 발생
    for (let i = next; i !== node; i = arr[i]) {
      cnt++; // 사이클 내의 노드 수 카운팅
    }
    cnt++; // 현재 노드도 포함
  }

  done[node] = true; // 현재 노드 처리 완료
}
