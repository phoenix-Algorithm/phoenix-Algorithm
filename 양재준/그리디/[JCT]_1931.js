const fs = require('fs');
let [N, ...input] = fs.readFileSync('dev/stdin').toString().split('\n');

N = Number(N);
input = input.map((v) => v.trim().split(' ').map(Number));

// 끝나는 시간을 기준으로 오름차순 정렬
// 끝나는 시간이 같다면 시작 시간을 기준으로 오름차순 정렬
input.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let count = 0;
let end = 0;
// input[i] = [시작 시간, 끝나는 시간]
// 끝나는 시간이 다음 회의의 시작 시간보다 작거나 같으면 회의를 진행할 수 있다.
for (let i = 0; i < N; i++) {
  if (end <= input[i][0]) {
    // 회의를 진행하면 끝나는 시간을 갱신한다.
    end = input[i][1];
    count++;
  }
}

console.log(count);
