let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number); // 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
let arr = []; // 순열을 계산하고자 하는 원소(element)가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i);
let selected = []; // 현재 순열에 포함된 원소(element)의 인덱스
let answer = '';
function dfs(arr, depth) {
  if (depth == m) {
    answer += selected.join(' ') + '\n';
    return;
  }
  for (let i = 1; i <= arr.length; i++) {
    // 하나씩 원소 인덱스(index)를 확인하며
    selected.push(i); // 현재 원소 선택
    dfs(arr, depth + 1); // 재귀 함수 호출
    selected.pop(); // 현재 원소 선택 취소
  }
}
dfs(arr, 0);
console.log(answer.trim());
