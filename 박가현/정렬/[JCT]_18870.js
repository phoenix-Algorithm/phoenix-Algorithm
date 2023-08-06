let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
// 집합(set)으로 변경해 중복 값을 없앤 뒤에 다시 배열로 변환
let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a, b) => a - b); // 오름차순 정렬 수행
// 0부터 차례대로 매핑(mapping) 수행
let myMap = new Map();
for (let i = 0; i < uniqueArray.length; i++) {
  myMap.set(uniqueArray[i], i);
}
answer = '';
for (x of arr) {
  answer += myMap.get(x) + ' ';
}
console.log(answer);

// 원래 적었던 답 ( 시간초과 )
/*
let fs = require('fs');
let [N, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.trim().split(' ').map(Number);
const ar = [...new Set(input)];
ar.sort((a, b) => a - b); //NlogN
let answer = '';
for (let i of input) {
  let num = ar.indexOf(i);
  answer += num + ' ';
} // N
console.log(answer.trim());
*/
