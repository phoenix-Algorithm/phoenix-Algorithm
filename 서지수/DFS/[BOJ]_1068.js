// 트리

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);
const parNode = input[1].split(' ').map(Number);
const removeNode = Number(input[2]);

const dfs = i => {
  // console.log(i);
  if (i === 0) {
    // console.log('끝에 옴');
    answer++;
  }
  if (parNode[i] !== -1 && parNode[i] !== removeNode) {
    dfs(parNode[i]);
  }
};

let answer = 0;
for (let i = 0; i < N; i++) {
  // 리프 노드인지 확인
  if (!parNode.includes(i)) {
    // 현재 노드가 삭제하려는 노드가 아니면
    if (i !== removeNode) {
      dfs(i);
    }
  }
}

console.log(answer);

// 블로그 풀이
// 아직도 이해가 잘 안가요...ㅜ
let tree = [];
let cnt = 0;
let rootNode;

parNode.forEach((parentNode, idx) => {
  // 루트 노드 인덱스 찾기
  if (parentNode == -1) {
    rootNode = idx;
    return;
  }

  if (!tree[parentNode]) {
    tree[parentNode] = [];
  }
  // 부모 노드에 리프 노드 추가
  tree[parentNode].push(idx);
});

const dfs = node => {
  // 루트 노드가 삭제하려는 노드면
  if (rootNode == removeNode) return 0;
  //
  if (!tree[node]) {
    cnt++;
    return;
  }
  tree[node].forEach(nodeNum => {
    if (nodeNum === removeNode) {
      if (tree[node].length === 1) cnt++;
      return;
    }
    dfs(nodeNum);
  });
  return cnt;
};

console.log(dfs(rootNode));
