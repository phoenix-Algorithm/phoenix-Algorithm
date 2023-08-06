let fs = require('fs');
let [N, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

N = parseInt(N);
input = input.map((x) => x.trim().split(' '));

let data = [];
for (let i = 0; i < N; i++) {
  let obj = {};
  let age = Number(input[i][0]);
  let name = input[i][1];

  obj.age = age;
  obj.name = name;
  obj.idx = i;
  data.push(obj);
}

function compareFunction(a, b) {
  if (a.age === b.age) return a.idx - b.idx;

  return a.age - b.age;
}

data.sort(compareFunction);

let answer = '';
for (let i = 0; i < data.length; i++) {
  answer += data[i].age + ' ' + data[i].name + '\n';
}

console.log(answer);
