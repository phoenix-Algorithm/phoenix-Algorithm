function solution(arr) {
    var stk = [];
    var i = 0;

    arr.forEach((item, i) => {
        if(stk[ stk.length -1 ] === arr[i]){
            stk.pop()
        }else{
            stk.push(arr[i])
        }
        i++
    })
    if(stk.length === 0) stk.push(-1)
    return stk;
}