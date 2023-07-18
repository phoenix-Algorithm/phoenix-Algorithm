let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let hour = ~~input[0];
let minute = ~~input[1];

if (hour === 0) {
  if (minute < 45) {
    hour = 23;
    minute += 15;
  } else {
    minute -= 45;
  }
} else {
  if (minute < 45) {
    hour -= 1;
    minute += 15;
  } else {
    minute -= 45;
  }
}

console.log(hour, minute);
