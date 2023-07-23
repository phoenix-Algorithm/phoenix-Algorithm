let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('test.txt').toString().split('\n');
const n = Number(input[0]); // 트리 높이
let tree = {};
const root = input[1].split(' ')[0]; //root 설정
for (let i = 1; i <= n; i++) {
  let [node, left, right] = input[i].trim().split(' ');
  tree[node] = [left, right]; // tree 객체의 node 키에 left, right를 배열로 할당
}

let str = '';
const preOrder = (node) => {
  if (node === '.') {
    return;
  }
  let r = tree[node];
  str += node;
  preOrder(r[0]);
  preOrder(r[1]);
};
const inOrder = (node) => {
  if (node === '.') {
    return;
  }
  let r = tree[node];
  inOrder(r[0]);
  str += node;
  inOrder(r[1]);
};
const postOrder = (node) => {
  if (node === '.') {
    return;
  }
  let r = tree[node];
  postOrder(r[0]);
  postOrder(r[1]);
  str += node;
};
preOrder(root);
console.log(str);
str = '';
inOrder(root);
console.log(str);
str = '';
postOrder(root);
console.log(str);
