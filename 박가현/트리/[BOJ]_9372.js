const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

let number = Number(input[0]);
let result = [];
let idx = 1;

for (let i = 0; i < number; i++) {
  let arr = [];
  let [nodeNum, edgeNum] = input[idx++].split(' ').map(Number);
  // nodeNum은 3 , edgeNum은 3
  for (let j = 0; j < edgeNum; j++) {
    arr[j] = input[idx++].split(' ').map(Number);
  }
  // a,b쌍을 arr에 담음
  const visited = new Array(nodeNum).fill(false);
  // 방문한 적을 나타내는 배열 국가 === index
  // 모든 index가 true가 되면 멈춤
  visited[0] = true;
  const queue = [0];
  let count = 0;

  while (queue.length) {
    const head = queue.shift(); // head = 0
    // head 1
    for (let node of arr) {
      //[1,2][2,3][3,4]
      if (node[0] - 1 === head && !visited[node[1] - 1]) {
        //1번국가 방문 o, 2번 국가 방문 x
        // 2번 국가 방문 o, 3번 국가 방문 X
        queue.push(node[1] - 1);
        visited[node[1] - 1] = true;
        count++;
        // 2번 국가 방문 0, 방문횟수 ++;
        // 3번 국가 방문한 것으로 true 변경
      } else if (node[1] - 1 === head && !visited[node[0] - 1]) {
        queue.push(node[0] - 1);
        visited[node[0] - 1] = true;
        count++;
      }
    }
    if (!visited.includes(false)) break;
  }
  result[i] = count;
}

console.log(result.join('\n'));
