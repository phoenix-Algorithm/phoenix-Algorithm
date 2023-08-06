let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [N, ...input] = fs.readFileSync(path).toString().trim().split('\n');
N = Number(N);
for (let i in input) {
  input[i] = input[i].trim();
}
let array = [...new Set(input)]; // set을 통해 중복 제거
array.sort((a, b) => {
  if (a.length === b.length) {
    if (a > b) return 1;
    else if (a < b) return -1;
  }
  return a.length - b.length;
}); // 길이로 판단 , 길이가 같다면 문자열로 판단
let answer = array.join('\n');
console.log(answer);
