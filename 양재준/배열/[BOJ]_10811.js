
let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n, cnt] = input[0].split(' ').map(Number);

let arr = Array(n).fill(1).map((v, i) => v + i)

for(let i = 1; i <= cnt; i++) {
    const [idx1, idx2] = input[i].split(' ').map(Number);
    
    let slice_arr = arr.slice(idx1 - 1, idx2); // arr에서 idx1 ~ idx2까지 배열 자르기
    slice_arr.reverse(); // 자른 배열 뒤집기

    arr.splice(idx1 - 1, idx2 - idx1 + 1, ...slice_arr); // arr에서 idx1 부터 idx2-idx1 + 1 개를 slice_arr로 대체
} 

console.log(arr.join(' '))

