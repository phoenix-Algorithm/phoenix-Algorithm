//강의 코드
let fs = require("fs");
let [n, m] = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);

let selected = [];
let visited = new Array(n).fill(false);

let answer = "";
/*let resArr = [];
let res = new Set();

input이 4 2일때만 작동함,,**
function dfs(arr, depth) {
  if (depth === m) {
    let newArr = [];
    for (i of selected) newArr.push(arr[i]);
    for (x of newArr) answer += x + " ";
    resArr.push(...answer.split("\n"));
    for (z of resArr) res.add(z.trim());
    for (y of res) {
      if (res.has(y.split("").reverse().join(""))) {
        res.delete(y.split("").reverse().join(""));
      }
    }
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
for (let item of res) {
  console.log(item);
}
*/

//자신보다 작은 값은 고르지 않도록
//=> 재귀 함수를 호출할 때 마다 선택되는 값이 커지도록

function dfs(arr, depth, start) {
  if (depth == m) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  //start부터 하나씩 확인
  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0, 0);
console.log(answer);
