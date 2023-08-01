// 단어 뒤집기 2

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
const S = input[0];

// 블로그 답안
let answer = "";
let word = "";

let isTag = false;

for (const s of S) {
  if (s === "<") {
    isTag = true;

    answer += word.split("").reverse().join("") + s;
    word = "";
  } else if (s === ">") {
    isTag = false;

    answer += word + s;
    word = "";
  } else if (s === " ") {
    if (isTag) {
      answer += word + s;
    } else {
      answer += word.split("").reverse().join("") + s;
    }
    word = "";
  } else {
    word += s;
  }
}

answer += word.split("").reverse().join("");

console.log(answer);
