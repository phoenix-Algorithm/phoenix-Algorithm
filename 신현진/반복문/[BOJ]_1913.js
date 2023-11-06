//달팽이
//답안 봄
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, num] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function populateSnailArray(n) {
  // 2차원 배열 만들기
  const snailArray = new Array(n);
  for (let i = 0; i < n; i++) {
    snailArray[i] = new Array(n);
  }

  let currentRow = 0;
  let currentCol = 0;
  let currentValue = n * n;
  //처음에 (0,0)에서 시작해서 아래 방향으로 진행
  let direction = "down";

  while (currentValue >= 1) {
    snailArray[currentRow][currentCol] = currentValue;

    // 방향을 바꿔주는 부분
    if (
      direction === "down" &&
      (currentRow === n - 1 ||
        snailArray[currentRow + 1][currentCol] !== undefined)
    ) {
      direction = "right";
    } else if (
      direction === "right" &&
      (currentCol === n - 1 ||
        snailArray[currentRow][currentCol + 1] !== undefined)
    ) {
      direction = "up";
    } else if (
      direction === "up" &&
      (currentRow === 0 || snailArray[currentRow - 1][currentCol] !== undefined)
    ) {
      direction = "left";
    } else if (
      direction === "left" &&
      (currentCol === 0 || snailArray[currentRow][currentCol - 1] !== undefined)
    ) {
      direction = "down";
    }

    if (direction === "down") {
      currentRow++;
    } else if (direction === "right") {
      currentCol++;
    } else if (direction === "up") {
      currentRow--;
    } else if (direction === "left") {
      currentCol--;
    }
    currentValue--;
  }

  // 완성된 배열 출력
  for (let row = 0; row < n; row++) {
    console.log(snailArray[row].join(" "));
  }

  //요 부분은 제가 작성했습니다,,ㅎㅎ 보잘것 없는;;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (snailArray[i][j] == num) {
        console.log(i + 1, j + 1);
      }
    }
  }
}

populateSnailArray(n);
