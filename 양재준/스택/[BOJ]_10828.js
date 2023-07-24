let fs = require('fs')
let input = fs.readFileSync('dev/stdin.txt').toString().trim().split('\n')

const n = Number(input[0])

let stack = []
let answer = ''

for(let i = 1; i <= n ; i++) {
    let data = input[i].split(' ')
    let order = data[0];

    switch(order){
        case 'push': //push
            stack.push(Number(data[1]))
            answer += ''
            break;
        case 'pop': //pop
            stack.length > 0 
            ? answer += stack.pop() 
            : answer += -1
            answer += '\n'
            break;
        case 'size': //size
            answer += stack.length
            answer += '\n'
            break;
        case 'empty': //empty
            stack.length === 0 
            ? answer += 1
            : answer += 0
            answer += '\n'
            break;
        case 'top': //top
            stack.length === 0 
            ? answer += -1 
            : answer += stack[stack.length - 1]
            answer += '\n'
            break;     
    }
}

console.log(answer)