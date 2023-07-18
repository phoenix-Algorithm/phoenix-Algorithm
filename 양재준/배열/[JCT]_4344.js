let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let num = Number(input[0]);

for(let i=1; i <= num; i++){
    let data = input[i].split(' ').map(Number);
    let idx = data[0];
    let sum = 0;    
    for(let j=1; j <= idx; j++){
        sum += data[j];
    }
    
    let avg = sum/idx;
    let cnt = 0;
    
    for(let j=1; j<=idx; j++){
        if(data[j] > avg) cnt ++;
    }

    console.log(((cnt / idx) * 100).toFixed(3)  + "%")

}