// 트리 순회

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const n = Number(input[0]);
// 블로그 답안
const tree = {};
for (let i = 1; i <= n; i++) {
  const [node, left, right] = input[i].split(" ");
  tree[node] = [left, right];
}

let result = "";

function preorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  result += node;
  preorder(lt);
  preorder(rt);
}

function inorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  inorder(lt);
  result += node;
  inorder(rt);
}

function postorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  postorder(lt);
  postorder(rt);
  result += node;
}

preorder("A");
result += "\n";
inorder("A");
result += "\n";
postorder("A");

console.log(result);
