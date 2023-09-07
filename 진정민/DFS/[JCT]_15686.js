let fs = require("fs");
let input = fs.readFileSync("index.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let arr1 = []; // home
let arr2 = []; // chicken

// 거리 계산을 위해 좌표로 담음
for (let i = 1; i <= n; i++) {
  let arr = [...input[i].split(" ").map(Number)];
  for (let j = 0; j < n; j++) {
    if (arr[j] == 1) arr1.push([i - 1, j]);
    else if (arr[j] == 2) arr2.push([i - 1, j]);
  }
}

// 15650 백트레킹에서 가져와서
// 치킨집 중 폐업시키지 않는 치킨집 고르는 경우의 수

let visited = new Array(arr2.length).fill(false);
let selected = [];

let minValue = 1e9;
dfs(0, 0);
console.log();
console.log(minValue);

// 기존 코드에선 시간 초과 때문에 고생했다가
// 강의 코드를 보고
// 매개 변수 start를 추가하고 복잡도가 많이 줄었습니다.
// 그래도 나름 60% 정도는 푼 것 같아 만족합니다.. ㅠ

function dfs(start, depth) {
  if (depth == m) {
    console.log(selected);

    let dist = 0;
    for (home of arr1) {
      let minHome = 1e9;
      for (i of selected) {
        minHome = Math.min(
          minHome,
          Math.abs(home[0] - arr2[i][0]) + Math.abs(home[1] - arr2[i][1])
        );
      }
      dist += minHome;
    }
    minValue = Math.min(minValsue, dist);
    return;
  }
  for (let i = start; i < arr2.length; i++) {
    console.log(i, visited[i]);
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(i + 1, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

// 처음엔 dfs 함수를 이렇게 만들었는데
// arr을 왜 매개 변수로 넣었는지 모르겠네요.. ㅋㅋ
// 아래 for문에서 계속 0부터 다시 탐색해 복잡도 낭비를 하고 있었던 것 같습니다.

// function dfs(arr, depth) {
//   if (depth == m) {
//     let dist = 0
//     for(home of arr1){
//       let minHome = 1e9
//       for(i of selected){
//         minHome = Math.min(minHome,Math.abs(home[0]-arr[i][0])+Math.abs(home[1]-arr[i][1]))
//       }
//       dist += minHome
//     }
//     if(dist <  minValue){
//       result = dist
//       minValue = Math.min(minValue, dist)
//     }
//     return;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (visited[i]) continue;
//     selected.push(i);
//     visited[i] = true;
//     dfs(arr, depth + 1);
//     selected.pop();
//     visited[i] = false;
//   }
// }
