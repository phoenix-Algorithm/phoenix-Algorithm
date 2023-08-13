//내 코드
// let fs = require('fs');
// let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
// let [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');
// n = Number(n);
// let answer = '';
// for (i = 0; i < n; i++) {
//   let arr = input[i].trim().split('');
//   let reverse = [...arr];
//   reverse.reverse();
//   if (arr.join('') === reverse.join('')) {
//     answer += 0 + '\n';
//     continue;
//   } else if (arr.length % 2 === 0) {
//     answer += 2 + '\n';
//   } //짝수인데 일치하지 않으면 어차피 하나를 빼도  불일치
//   else {
//     let index = -100;
//     for (let i in arr) {
//       if (arr[i] !== reverse[i]) {
//         if (arr[Number(i) + 1] === reverse[i]) {
//           index = i;
//           break;
//         }
//         if (reverse[Number(i) + 1] === arr[i]) {
//           index = arr.length - i - 1;
//           break;
//         }
//       }
//     } //for문
//     arr.splice(index, 1);
//     reverse = [...arr];
//     reverse.reverse();
//     if (arr.join('') === reverse.join('')) {
//       answer += 1 + '\n';
//     } else {
//       answer += 2 + '\n';
//     }
//   } //else
// }
// console.log(answer.trim());

// 강의 답

let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

function palindrome(x) {
  return x == x.split('').reverse().join('');
}
let testCases = Number(input[0]);
for (let tc = 1; tc <= testCases; tc++) {
  // 문자열을 하나씩 입력받아 처리
  let data = input[tc];
  if (palindrome(data)) console.log(0); // 회문인 경우
  else {
    // 회문이 아닌 경우, 유사 회문인지 검사
    let found = false;
    let n = data.length; // 문자열의 길이
    for (let i = 0; i < parseInt(n / 2); i++) {
      if (data[i] != data[n - i - 1]) {
        // 대칭이 아닌 인덱스를 찾은 경우
        // 앞쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (palindrome(data.slice(0, i) + data.slice(i + 1, n))) found = true;
        // 뒤쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n)))
          found = true;
        break;
      }
    }
    if (found) console.log(1); // 유사 회문인 경우
    else console.log(2); // 회문도 유사 회문도 아닌 경우
  }
}
