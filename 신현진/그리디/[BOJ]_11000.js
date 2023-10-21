//강의실 배정
//답안 봄
let fs = require("fs");
let path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...input] = fs.readFileSync(path).toString().trim().split("\n");
n = +n;

let classTime = [];
for (let i = 0; i < n; i++) {
  classTime.push(input[i].split(" ").map(Number));
}

/*classTime.sort((a, b) => a[0] - b[0]);
console.log(classTime);

let current = 0;
let classRoom = 1; //맨 처음 수업의 강의실

function sol(classTime, s, t, current) {
  if (s >= classTime[current][0] && s < classTime[current][1]) {
    classRoom++;
    return;
  } else {
    //같은 강의실을 쓰게 됨
    // -> 다음 수업 분석하기
    current++;
    for (let i = 2; i <= n; i++) {
      if (i == n) return;
      //그다음 수업부터 확인
      let [ns, nt] = classTime[i];
      console.log(ns, nt);
      sol(classTime, ns, nt, current);
    }
  }
}

sol(classTime, classTime[1][0], classTime[1][1], current);

console.log(classRoom);*/

let times = [];

classTime.forEach((v) => {
  //[시작시간, 1],[종료시간,-1]
  times.push([v[0], 1]);
  times.push([v[1], -1]);
});

// 시작 시간/종료시간 오름차순으로 정렬
times.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

let answer = 0;
let result = 0;

//result: 겹치지 않는 강의의 수 계산
for (let i = 0; i < times.length; i++) {
  result += times[i][1];
  //answer: 겹치지 않는 강의가 최대일 때 강의실이 가장 최소로 열림.
  answer = Math.max(result, answer);
}

console.log(answer);
