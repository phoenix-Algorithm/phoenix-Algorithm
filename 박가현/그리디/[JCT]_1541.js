let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('-');

// -가 시작하고 -  또는 종료 앞에서
let addArray = input.map((ele) => {
  if (!ele.includes('+')) {
    return Number(ele);
  }
  let ar = ele.split('+');
  ar = ar.map(Number);
  let value = ar.reduce((acc, value) => {
    acc += value;
    return acc;
  });
  return value;
});
let answer = addArray.reduce((acc, value) => {
  acc -= value;
  return acc;
});
console.log(answer);
