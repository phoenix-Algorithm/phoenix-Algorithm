let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let h = Number(input[0]);
let m = Number(input[1]);

function convert(h, m) {
    if(m < 45){
        h -= 1;
        m = m + 60 - 45;
        if( h < 0) h = 23
    }else{
        m -= 45;
    }
    console.log(h + ' ' + m)
    
}

convert(h, m);