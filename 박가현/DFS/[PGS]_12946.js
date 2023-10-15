function solution(n) {
  let answer = [];
  function move(n, from, to) {
    if (n === 1) {
      return;
    }
    move(n - 1, from, 6 - from - to);
    answer.push([from, to]);
    move(n - 1, 6 - from - to, to);
  }
  move(n + 1, 1, 3);
  return answer;
}
