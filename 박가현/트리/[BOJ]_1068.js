const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
const deleteNode = Number(input[2]);
const child = [];
const parent = [];
const deleted = new Array(n).fill(false);
arr.map((element, index) => {
  if (parent[index] === undefined) {
    parent[index] = [];
  }
  parent[index].push(element);
  if (child[element] === undefined) {
    child[element] = [];
  }
  child[element].push(index);
});
/*
삭제 될 노드를 구하기
삭제 될 노드를 제외하고 트리를 다시 구성
트리에서 리프 노드 구하기
 */
const getDeleteNode = (index) => {
  deleted[index] = true;
  if (child[index] === undefined) return;
  for (let i = 0; i < child[index].length; i++) {
    let num = child[index][i];
    deleted[num] = true;
    if (child[num] !== undefined) {
      getDeleteNode(num);
    }
  }
  return;
};
getDeleteNode(deleteNode);
const childAfterDeleted = [];

for (let i = 0; i < arr.length; i++) {
  if (deleted[i] === true) continue;
  const element = arr[i];
  if (element === -1) continue;
  if (childAfterDeleted[element] === undefined) {
    childAfterDeleted[element] = [];
  }
  childAfterDeleted[element].push(i);
}
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (deleted[i]) continue;
  if (childAfterDeleted[i] === undefined) {
    count++;
  }
}
console.log(count);
