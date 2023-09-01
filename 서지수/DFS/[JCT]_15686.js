// 3-1. 치킨 배달

// 강의 풀이
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const dfs = (depth, start) => {
  // console.log('depth: ', depth, 'start: ', start);
  if (depth == m) {
    // 각 조합을 확인하는 부분
    let result = []; // 조합 결과 저장 테이블
    for (let i of selected) result.push(chicken[i]);
    // console.log('결과에 치킨 위치를 넣음', result);
    let sum = 0; // 치킨 거리의 합
    for (let [hx, hy] of house) {
      let temp = 1e9;
      for (let [cx, cy] of result) {
        // console.log(
        //   `${hx},${hy}집에서 ${cx},${cy} 치킨집 사이 거리: `,
        //   Math.abs(hx - cx) + Math.abs(hy - cy)
        // );
        temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
      sum += temp;
      // console.log('sum에다가 치킨 거리 더함', sum);
    }
    answer = Math.min(answer, sum); // 최솟값 계산
    return;
  }
  // start 지점부터 하나씩 원소 인덱스를 확인하며
  for (let i = start; i < chicken.length; i++) {
    if (visited[i]) continue; // [중복을 허용하지 않으므로] 이미 처리된 원소라면 무시
    selected.push(i); // 현재 원소 선택
    // console.log('selected에 i를 넣음', selected);
    visited[i] = true; // 현재 원소 방문 처리
    dfs(depth + 1, i + 1); // 조합이므로, 재귀 함수 호출시 다음 인덱스를 넣기
    selected.pop(); // 현재 원소 선택 취소
    // console.log('selected에 i를 뺌', selected);
    visited[i] = false; // 현재 원소 방문 처리 취소
  }
};

const [n, m] = input[0].split(' ').map(Number);
let chicken = []; // 전체 치킨집 위치 배열
let house = []; // 전체 집 위치 배열
for (let i = 1; i <= n; i++) {
  // 전체 도시 정보 입력 받기
  let line = input[i].split(' ').map(Number);
  for (let j = 0; j < n; j++) {
    if (line[j] == 1) house.push([i, j]);
    if (line[j] == 2) chicken.push([i, j]);
  }
}

let visited = new Array(chicken.length).fill(false); // 각 치킨집 방문 여부
let selected = []; // 현재 조합에 포함된 원소

let answer = 1e9;
dfs(0, 0);
console.log(answer);
