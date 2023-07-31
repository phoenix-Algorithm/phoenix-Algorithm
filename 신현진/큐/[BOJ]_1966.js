let fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input.shift());

function solution(TEST_CASE, input) {
  let result = [];
  for (let i = 0; i < TEST_CASE; i += 1) {
    // M = priority 에서의 목표 인덱스
    let [N, M] = input.shift().split(" ").map(Number);
    let priority = input.shift().split(" ").map(Number);
    let cnt = 1;

    while (true) {
      let max = Math.max(...priority);
      let cur = priority.shift();

      // 현재의 값이 가장 중요도가 큰 값 이상이고,
      // 큐의 맨 앞에 있을 경우 (목표 값)
      if (cur >= max && M === 0) {
        result.push(cnt);
        break;
      }
      // 현재의 값이 가장 중요도가 큰 값보다 작고,
      // 큐의 맨 앞에 있을 경우 (목표 값)
      // 아직 차례가 아니므로 맨 뒤에 다시 넣어주고 M의 값 갱신
      else if (cur < max && M === 0) {
        priority.push(cur);
        M = priority.length - 1;
      }
      // 현재의 값이 가장 중요도가 큰 값 이상일 경우
      else if (cur >= max) {
        cnt += 1;
        // queue 에서 하나가 뽑혔으므로 M의 값 -1
        M -= 1;
      }
      // 현재의 값이 가장 중요도가 큰 값보다 작을 경우
      // 큐의 맨 마지막에 다시 넣어줌
      else if (cur < max) {
        priority.push(cur);
        // queue 에서 하나가 뽑혔으므로 M의 값 -1
        M -= 1;
      }
    }
  }

  console.log(result.join("\n"));
}

solution(N, input);
