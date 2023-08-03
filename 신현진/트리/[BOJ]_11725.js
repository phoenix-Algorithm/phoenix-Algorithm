let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let nodeNum = Number(input.shift());

let edges = input.map((v) => v.split(" ").map(Number));
//console.log(edges);

let tree = [...Array(nodeNum + 1)].map(() => []);
//console.log(tree);

edges.forEach(([a, b]) => {
  tree[a].push(b);
  tree[b].push(a);
});

let relations = [];

const bfs = () => {
  const visited = Array(nodeNum + 1).fill(false);
  visited[1] = true;
  let queue = [1];
  let stack;
  while (queue.length) {
    stack = queue;
    queue = [];
    while (stack.length) {
      const node = stack.pop();
      const children = tree[node];
      if (children) {
        children.forEach((child) => {
          if (!visited[child]) {
            visited[child] = true;
            relations[child] = node;
            queue.push(child);
          }
        });
      }
    }
  }
};

bfs();
console.log(relations.slice(2).join("\n"));
