let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let num = Number(input[0]);

for(let i=1; i<=num; i++){
    let data = input[i].split(' ');
    let repeat = Number(data[0]);
    let string = data[1];
    let result = '';
    for(let x of string){
        for(let j=0; j< repeat; j++){
            result += x;
        }
    } //string.charAt.repaet
    console.log(result);
}







