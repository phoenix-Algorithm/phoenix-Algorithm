// 2884 알람 시계

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

time = input[0].split(' ');
hour = Number(time[0]);
minute = Number(time[1]);

if((minute-45)<0){
  if(hour == 0){
    hour = 23
  } else{
      hour -= 1;
  }
  minute +=15;
  console.log(`${hour} ${minute}`)
}else{
  console.log(`${hour} ${minute-45}`)
}
