function solution(arr1, arr2) {
  let sumArr1 = arr1.reduce((acc, cur) => acc + cur, 0);
  let sumArr2 = arr2.reduce((acc, cur) => acc + cur, 0);

  if (arr1.length === arr2.length) {
    if (sumArr1 > sumArr2) {
      return 1;
    } else if (sumArr2 > sumArr1) {
      return -1;
    } else {
      return 0;
    }
  }

  return arr1.length > arr2.length ? 1 : -1;
}
