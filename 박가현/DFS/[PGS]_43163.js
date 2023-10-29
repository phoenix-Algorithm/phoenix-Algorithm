function solution(n, computers) {
  function dfs(graph, v, visited, count) {
    // 현재 노드를 방문 처리
    visited[v] = true;
    count.push(v);
    for (i of graph[v]) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(graph, i, visited, count);
      }
    }
  }
  const computers_array = [];
  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers[i].length; j++) {
      if (computers_array[i + 1] === undefined) {
        computers_array[i + 1] = [];
      }
      if (i === j) continue;
      let num = computers[i][j];
      if (num === 1) {
        computers_array[i + 1].push(j + 1);
      }
    }
  }
  const visited = new Array(n).fill(false);
  const network = [];
  let index = 0;
  for (let i = 1; i < computers_array.length; i++) {
    if (visited[i]) continue;
    if (network[index] === undefined) {
      network[index] = [];
    }
    dfs(computers_array, i, visited, network[index]);
    index++;
  }
  return network.length;
}
