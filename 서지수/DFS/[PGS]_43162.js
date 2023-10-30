// 네트워크

function solution(n, computers) {
  var answer = 0;
  let answerArr = [];
  let visited = new Array(n).fill(false);

  const dfs = (node, arr) => {
    visited[node] = true;
    for (let i = 0; i < n; i++) {
      //   console.log('i: ', i);
      if (!visited[i] && computers[node][i]) {
        arr = dfs(i, [...arr, i]);
        // console.log('통과한 i: ', i);
      }
    }
    return arr;
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) answerArr.push(dfs(i, [i]));
  }
  answer = answerArr.length;
  //   console.log(answer);
  return answer;
}

solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
