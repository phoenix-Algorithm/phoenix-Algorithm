const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
// const input = fs.readFileSync(path).toString().trim().split('\n');
// const n = Number(input[0]);
// const array = [];
// for (let i = 1; i <= n; i++) {
//   array.push(input[i].split(' ').map(Number));
// }
// console.log(array);
// // 1. 팀을 구성한다 (백트래킹 이용)
// // 2. 해당 팀들의 능력치를 구하고 차이 값을 구한다
// // 3. 가장 차이가 적은 것을 구한다

// let selected = [];
// function dfs(arr, depth, start) {
//   if (depth == n / 2) {
//     // 해당 팀들의 능력치를 구하기
//   }
//   for (let i = start; i <= arr.length; i++) {
//     // 하나씩 원소 인덱스(index)를 확인하며
//     if (selected.includes(i)) continue; // [중복을 허용하지 않으므로] 이미 처리 된 원소라면 무시
//     selected.push(i); // 현재 원소 선택
//     dfs(arr, depth + 1, i + 1); // 재귀 함수 호출
//     selected.pop(); // 현재 원소 선택 취소
//   }
// }
// dfs(array, 0, 1);

const sol = (input) => {
  const N = +input[0];
  const halfN = N / 2;
  const stats = input.slice(1).map((str) => str.split(' ').map(Number));

  const check = new Array(N).fill(0);
  let min = Number.MAX_SAFE_INTEGER;
  function dfs(L, K) {
    if (L === halfN) {
      // 스타트팀에 N/2 명이 뽑혔다면
      const sTeam = [];
      const lTeam = [];
      let sSum = (lSum = 0);
      for (let i = 0; i < N; i++) {
        if (check[i]) sTeam.push(i);
        // 체크 배열은 스타트 팀에 넣어주고, 체크 배열에 없으면 링크 팀에 넣어준다.
        else lTeam.push(i);
      }
      for (let i = 0; i < halfN; i++) {
        for (let j = i + 1; j < halfN; j++) {
          // (i,j), (j,i) 쌍을 계속 더해준다.
          sSum = sSum + stats[sTeam[i]][sTeam[j]] + stats[sTeam[j]][sTeam[i]];
          lSum = lSum + stats[lTeam[i]][lTeam[j]] + stats[lTeam[j]][lTeam[i]];
        }
      }
      min = Math.min(min, Math.abs(sSum - lSum));
      return;
    }

    for (let i = K; i < N; i++) {
      // 체크 배열을 스타트 팀 구성에 사용한다.
      check[i] = 1;
      dfs(L + 1, i + 1);
      check[i] = 0;
    }
  }
  dfs(0, 0);
  return min;
};

// 백준에서 입력을 받는 코드
const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(sol(input));
    process.exit();
  });
