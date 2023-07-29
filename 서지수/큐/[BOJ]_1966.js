// 프린터 큐

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

tc = Number(input[0]);

// 블로그 답안
// https://gywlsp.github.io/boj/1966/
// https://junghyeonsu.tistory.com/249

for (let i = 1; i <= 2 * tc; i += 2) {
  let [N, M] = input[i].split(" ").map(Number);
  let que = input[i + 1].split(" ").map(Number);
  let count = 1;

  while (1) {
    const shiftItem = que.shift();
    if (Math.max(...que) <= shiftItem && M === 0) {
      console.log(count);
      break;
    } else if (Math.max(...que) > shiftItem && M === 0) {
      que.push(shiftItem);
      M = que.length - 1;
    } else if (Math.max(...que) > shiftItem) {
      que.push(shiftItem);
      M -= 1;
    } else if (Math.max(...que) <= shiftItem) {
      count += 1;
      M -= 1;
    }
  }
}
