//네트워크
function dfs(x, visited, arr) {
  if (visited[x]) return;
  visited[x] = true;

  for (let connect of arr[x]) {
    if (!visited[connect]) dfs(connect, visited, arr);
  }
}

function solution(n, computers) {
  if (n === 1) return 1;
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = [];
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i != j && computers[i][j] == 1) {
        arr[i].push(j);
      }
    }
  }
  let visited = new Array(n).fill(false);
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, visited, arr);
      answer++;
    }
  }
  return answer;
}
