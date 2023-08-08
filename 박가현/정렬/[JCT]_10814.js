let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');
let ar = [];
for (let i in input) {
  input[i] = input[i].trim().split(' ');
  let obj = {
    age: Number(input[i][0]),
    name: input[i][1],
    index: Number(i),
  };
  ar.push(obj);
}
// 객체를 담는 배열로 만든다 나이, 이름 , 가입순서
ar = ar.sort((a, b) => {
  if (a.age === b.age) {
    return a.index - b.index;
  }
  return a.age - b.age;
});
// 나이가 같으면 가입순서 (index)로 판단, 아니면 나이로 판단
let answer = '';
for (let i of ar) {
  answer += `${i.age} ${i.name} \n`;
}
console.log(answer.trim());
