// 1. StackSizeExceeded ERR를 만났습니다.
// 무한 재귀에 빠지는 현상 때문이라고 해서
// 방문 체크를 통해 해결

// 2. 메모리 초과가 났습니다.
// 복잡도 신경 안 쓰고 만들어서 날 것이라고 예상했는데
// checkArr 배열을 없애 해결했습니다.

// 3. 시간 초과가 났습니다.
// 계속 80%에서 시간초과를 해결하지 못해 결국 답을 봤습니다.. ㅠ
// 엄청 복잡하게 풀었는데 답안 dfs 함수는 매우 간결하더라고요

// let fs = require("fs");
// let input = fs.readFileSync("dev/stdin.txt").toString().split("\n");

// let t = Number(input[0])
// let line = 1;

// let answer = 0
// let numArr = []

// function visitedFalse(arr,firstNum,visited){
//   digit = firstNum
//   for(let j = 0; j<checkNum; j++){
//     visited[digit-1] = false
//     digit = arr[digit-1]
//   }
// }

// function dfs(arr, i, visited,selected){
//   // 이미 선택된
//   if(selected[i-1]){
//     visitedFalse(arr,firstNum,visited)
//     return
//   }
//   checkNum++

//   visited[i-1] = true

//   // 담긴 배열 안에 그룹이 형성될 경우
//   if(visited[arr[i-1]-1]){
//     visitedFalse(arr,firstNum,visited)
//     let startIndex = arr[i-1]
//     // 그룹이 시작되는 index부터 선택처리 후 answer++
//     digit = startIndex
//     while(true){
//       selected[digit-1] = true
//       answer++
//       checkNum--
//       if(digit == i) break
//       digit = arr[digit-1]
//     }
//     // 그룹이 형성되지 못하는 그룹을 선택처리하여 탐색하지 않도록 하고 answer는 더하지 않음
//     digit = firstNum
//     while(checkNum){
//       selected[digit-1] = true
//       digit = arr[digit-1]
//       checkNum--
//     }
//     return
//   }

//   if(!visited[arr[i-1]-1]){
//     dfs(arr, arr[i-1],visited,selected)
//   }else{
//     digit = startIndex
//     while(true){
//       selected[digit-1] = true
//       answer++
//       checkNum--
//       if(digit == i) break
//       digit = arr[digit-1]
//     }
//   }
// }

// while(t--){
//   let n = Number(input[line])
//   line++

//   let arr = input[line].split(" ").map(Number)
//   line++
//   let visited = new Array(n).fill(false)
//   let selected = new Array(n).fill(false)

//   for(let i = 1; i<=n; i++){
//     if(selected[i-1]) continue
//     firstNum = i
//     checkNum = 0
//     dfs(arr,i,visited,selected)
//   }

//   console.log(n-answer)
//   answer = 0
// }

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

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
let line = 1;

while (testCase--) {
  let n = Number(input[line]);
  let graph = [0, ...input[line + 1].split(" ").map(Number)];
  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];

  for (let x = 1; x <= n; x++) {
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }

  line += 2;
  console.log(n - result.length);
}
