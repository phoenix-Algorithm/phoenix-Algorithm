let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let str = input[0];
let cnt = 0;

for(let i=0; i<str.length; i++){
    if(str.charAt(i) === 'c'){
        if(str.charAt(i+1) === '=' || str.charAt(i+1) === '-'){
            cnt ++;
            i++
        }else{
            cnt++;
        }
    }
    else if(str.charAt(i) === 'd'){
        if(str.charAt(i+1) === '-'){
            cnt ++;
            i++
        }else if(str.charAt(i+1) === 'z' && str.charAt(i+2) === '='){
            cnt ++;
            i += 2;
        }else{
            cnt++;
        }
    }
    else if(str.charAt(i) === 'l' || str.charAt(i) === 'n'){
        
        if(str.charAt(i+1) === 'j'){
            cnt ++;
            i++
        }else{
            cnt++;
        }
    }
    else if(str.charAt(i) === 's' || str.charAt(i) === 'z'){
        
        if(str.charAt(i+1) === '='){
            cnt ++;
            i++;
        }else{
            cnt++;
        }
    }
    else{
        cnt ++;
    }
}

console.log(cnt)

