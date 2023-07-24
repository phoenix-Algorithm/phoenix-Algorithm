function solution(arr) {
  let stk = [];
  arr.map((value, index) => {
    if (stk.length === 0) {
      stk = [value];
    } else {
      stk[stk.length - 1] === value
        ? (stk.length -= 1)
        : (stk = [...stk, value]);
    }
  });
  if (stk.length === 0) {
    return [-1];
  }

  return stk;
}
