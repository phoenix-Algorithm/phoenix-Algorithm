// 이 문제는 앞에 N 과 M 문제에서 arr을 바꾸고
// 중복 제거하면 될 것 같아서 구현해보았습니다.
// 이 코드도 아마 효율은 좋지 않을 것 같네요..

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

for (let j = 0; j < input.length - 1; j++) {
  let [n, ...arr] = input[j].split(" ").map(Number); // 기존 arr이 1~N까지 수였던 걸 수정

  let visited = new Array(n).fill(false);
  let selected = [];

  let answer = "";
  function dfs(arr, depth) {
    if (depth == 6) {
      let result = [];
      for (i of selected) result.push(arr[i]);
      for (let i = 0; i < result.length - 1; i++) {
        // 오름차순 구현으로 중복 제거
        if (result[i] > result[i + 1]) return;
      }
      for (x of result) answer += x + " ";
      answer += "\n";
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      selected.push(i);
      visited[i] = true;
      dfs(arr, depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }

  dfs(arr, 0);
  console.log(answer);
}
