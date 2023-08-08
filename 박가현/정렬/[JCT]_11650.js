let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [N, ...input] = fs.readFileSync(path).toString().trim().split('\n');
N = Number(N);
let array = [];
for (let i = 0; i < N; i++) {
  array.push(input[i].trim().split(' '));
} // x,y 좌표 배열을 요소로 가진 배열을 생성
array.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
}); // 조건에 맞게 정렬
for (let i in array) {
  array[i] = array[i].join(' ');
} // 한 점의 x와 y 좌표를 이어진 문자열로 출력할 수 있게 배열이 아닌 문자열로 바꾸어줌
let answer = array.join('\n');
console.log(answer);
