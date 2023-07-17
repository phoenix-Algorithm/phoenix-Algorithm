let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let num = Number(input[0]);
let cnt = 0;

for(let i=1; i <= num; i++){
    let str = input[i];
    let chkArr = [];
    let isGroup = true;
    
    for(let j=0; j < str.length; j++){
        if(chkArr.indexOf(str.charAt(j)) == -1) {
            chkArr.push(str.charAt(j));
        } else {
            if(chkArr.indexOf(str.charAt(j)) != chkArr.length -1) {
                isGroup = false;
                break;
            }
        }
    }
    if(isGroup) cnt ++;
}

//강의 풀이
/* function checkGroup(data){
    let set = new Set(data[0]);
    for(let i=0; i<data.length -1; i++){
        if(data[i] != data[i + 1]) {
            if(set.has(data[i + 1])){
                return false;
            }else{
                set.add(data[i + 1]) ;
            }

        }
    }
    return true;
}

for(let i=1; i <= num; i++){
    let data = input[i];
    if(checkGroup(data)) cnt += 1
} */ 

console.log(cnt)





