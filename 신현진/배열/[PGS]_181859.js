function solution(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    stk.length < 0
      ? stk.push(arr[i])
      : stk[stk.length - 1] === arr[i]
      ? stk.pop()
      : stk.push(arr[i]);
  }
  return stk.length === 0 ? [-1] : stk;
}
