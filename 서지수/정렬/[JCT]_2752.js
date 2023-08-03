// 1. 세수정렬

// 나의 풀이
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

input = input[0].split(" ").map(Number);
console.log(input.sort((a, b) => a - b).join(" "));

// 강의 풀이
// 동일

// + 선택 정렬을 이용한 풀이
// 데이터가 많을 때는 비효율적이지만 데이터 갯수가 1,000개 이하일 때는 빠르게 수행됨
// 이 문제는 데이터가 3개이기 때문에 사용해도 괜찮음
function selectionSort(arr) {
  // 선택 정렬 함수
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++)
      if (arr[minIndex] > arr[j]) minIndex = j;
    let temp = arr[i]; // 스와프(swap)
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

let arr = input[0].split(" ").map(Number);
selectionSort(arr);

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + " ";
}
console.log(answer);
