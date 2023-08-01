let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')[0]

let data = input.split('')
let stack = []
let temp_stack = []
let result = ''

// 전달받은 배열을 stack에 push해주는 함수
function pushToStack(arr) {
    while(arr.length > 0){
        stack.push(arr.pop())
    }
}

// input 데이터의 length가 0이 될때까지 while문 반복
while(data.length > 0){
    // 데이터의 제일 마지막 요소에 따라 분기
    // 1. 공백 
    // 2.'>'
    // 3, 일반 단어

    // 마지막 요소가 공백일 경우
    // temp stack과 공백을 result stack에 push
    if (data.at(-1) === ' '){
        pushToStack(temp_stack)
        stack.push(data.pop())
    }
    // 마지막 요소가 '>'일 경우
    // temp stack을 result stack에 push 하고
    // 제일 마지막 '<'의 인덱스를 찾아 '<'부터 끝까지 잘라서 result stack에 push
    else if(data.at(-1) === '>'){
        let idx = data.lastIndexOf('<')
        pushToStack(temp_stack)
        pushToStack(data.splice(idx))
    }
    // 일반 단어일 경우 임시 stack에 마지막 요소를 push 해둠
    else {
        temp_stack.push(data.pop())
    }

    // while문 빠져나오기 전에 임시 stack을 result stack에 push
    if(data.length == 0) pushToStack(temp_stack)
} 

//stack의 요소를 pop하고 출력
while(stack.length > 0) {
    result += stack.pop();
}
console.log(result)

