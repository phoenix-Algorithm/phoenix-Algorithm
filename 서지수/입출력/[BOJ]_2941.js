// 크로아티아 알파벳

const word = [/c=/g, /c-/g, /dz=/g, /d-/g, /lj/g, /nj/g, /s=/g, /z=/g];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let inputWord = input[0];

for (let i = 0; i < word.length; i++) {
  inputWord = inputWord.replace(word[i], "1");
}

console.log(inputWord.length);
