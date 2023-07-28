// 1991 트리 순회

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let obj ={}

for(let i = 1; i<=Number(input[0]); i++){
  let [node, left, right] = input[i].split(" ");
  obj[node] = [left, right]
}

let answer = ""

function preorder(node){
  if (node === ".") return;
  const [left, right] = obj[node];
  answer += node;
  preorder(left);
  preorder(right);
}

function inorder(node) {
  if (node === ".") return;
  const [left, right] = obj[node];
  inorder(left);
  answer += node;
  inorder(right);
}

function postorder(node) {
  if (node === ".") return;
  const [left, right] = obj[node];
  postorder(left);
  postorder(right);
  answer += node;
}

preorder("A");
answer += "\n"
inorder("A");
answer += "\n"
postorder("A");

console.log(answer)