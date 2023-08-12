let fs = require('fs');
let [T, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

T = Number(T);

let answer = [];

for (let i = 0; i < T; i++) {
  // 지원자 수
  let N = input.shift();
  // [서류심사 성적, 면접 성적]
  let arr = input.splice(0, N).map((v) => v.split(' ').map(Number));
  // 서류심사 성적을 기준으로 오름차순 정렬
  arr.sort((a, b) => a[0] - b[0]);

  // 서류심사 성적 1등은 무조건 합격이므로 count는 1부터 시작
  let count = 1;
  // 면접 성적 1등의 면접 성적을 min에 저장
  let min = arr[0][1];
  // 서류심사 성적 2등부터 반복문을 시작
  for (let j = 1; j < N; j++) {
    // 면접 성적이 min보다 작으면 합격
    if (arr[j][1] < min) {
      // 면접 성적이 min보다 작으면 min을 갱신하고 count를 1 증가
      count++;
      min = arr[j][1];
    }
  }

  answer.push(count);
}

console.log(answer.join('\n'));
