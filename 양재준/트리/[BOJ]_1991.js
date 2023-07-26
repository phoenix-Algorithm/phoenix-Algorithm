let fs = require("fs");
let [N, ...input] = fs.readFileSync("dev/stdin.txt").toString().trim().split("\n");

const nodes = input.map(v => v.split(' '));
const trees = nodes.reduce((acc, [node, left, right]) => {
    acc[node] = { left, right };
    return acc;
}, {})

const preOrder = (node) => {
    if(node === '.') {
        return '';
    }
    const { left , right } = trees[node];
    return node + preOrder(left) + preOrder(right);
};

const inOrder = (node) => {
    if(node === '.') {
        return '';
    }
    const { left , right } = trees[node];
    return inOrder(left) + node + inOrder(right);
};

const postOrder = (node) => {
    if(node === '.') {
        return '';
    }
    const { left , right } = trees[node];
    return postOrder(left) + postOrder(right) + node;
};

console.log(preOrder('A'))
console.log(inOrder('A'))
console.log(postOrder('A'))