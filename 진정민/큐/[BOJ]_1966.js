// 1966 프린터 큐

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let [n, ...arr] = input;
arr = arr.map((item) => item.split(" ").map(Number));
let answer = "";

for (let i = 0; i < arr.length; i += 2) {
  let count = 0;
  const priorities = arr[i + 1];
  let location = arr[i][1];

  //break 될 때까지 반복
  while (true) {
    // 우선순위가 높은 순서로 비교하며 하나씩 제거하고 count++
    const max = Math.max(...priorities);
    const number = priorities.shift();

    if (number === max) {
      count++;
      // number === max, location === 0 두 조건이 일치할 때 정답
      if (location === 0) {
        answer += count + "\n";
        break;
      }
    } else {
      priorities.push(number);
    }

    // 찾고자 하는 index까지 찾기 위해 반복
    if (location === 0) {
      location = priorities.length - 1;
    } else {
      location--;
    }
  }
}

console.log(answer.trim());
