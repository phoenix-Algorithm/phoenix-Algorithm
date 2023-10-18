// 기타 레슨
// 답안 봄
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const timeArr = input[0].split(" ").map(Number);

// 블루레이 크기를 기준으로 왔다갔다

// 제일 작은 값 => 제일 긴 강의 시간
let left = Math.max(...timeArr);

// 제일 큰 값 => 블루레이가 1개 -> 모든 강의 시간을 더한 값
let right = timeArr.reduce((a, b) => a + b);

let answer = Number.MAX_SAFE_INTEGER;

while (left <= right) {
  let count = 1;

  // 중간 블루레이 크기값
  let mid = parseInt((left + right) / 2);
  let sum = 0;

  console.log(mid);

  // 강의 시간 순회
  for (let i = 0; i < N; i++) {
    // 만약 sum+강의 시간이 블루레이 크기 중간값보다 같거나 작으면
    if (sum + timeArr[i] <= mid) {
      // sum에 해당 강의 시간을 더해줌
      sum += timeArr[i];
      // sum+강의 시간이 블루레이 크기 중간값보다 크면
    } else {
      sum = timeArr[i];
      //블루레이 갯수를 늘려줌
      count++;

      // 만약 블루레이 갯수가 m보다 크다면 탈출
      if (count > M) break;
    }
  }

  if (count > M) {
    left = mid + 1;
  }

  if (count <= M) {
    if (answer >= mid) answer = mid;
    right = mid - 1;
  }
}

console.log(answer);
