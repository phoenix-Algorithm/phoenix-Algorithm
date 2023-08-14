const fs = require('fs');
let [N, ...input] = fs
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((v) => v.trim());

N = Number(N);

// 회문인지 확인
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // 첫번째 문자와 마지막 문자가 다르면 회문이 아님
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

// 유사회문인지 확인
function isPseudoPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      // 현재 left, right 까지는 회문이므로, left, right를 제외한 나머지 문자열이 회문인지 확인
      // str.slice(left + 1, right + 1) : left를 제외한 left + 1부터 right까지의 문자열
      // str.slice(left, right) : right를 제외한 left부터 right - 1까지의 문자열
      return isPalindrome(str.slice(left + 1, right + 1)) || isPalindrome(str.slice(left, right));
    }
    left++;
    right--;
  }

  return true;
}

for (let i = 0; i < N; i++) {
  let str = input[i].split('');

  let result = isPalindrome(str) ? 0 : isPseudoPalindrome(str) ? 1 : 2;

  console.log(result);
}
