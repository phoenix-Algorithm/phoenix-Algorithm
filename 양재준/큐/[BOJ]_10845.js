let fs = require('fs')

let input = fs.readFileSync('dev/stdin.txt').toString().trim().split('\n')

const n = Number(input[0])

class Queue {
    constructor() {
        this.items = {};
        this.headIdx = 0;
        this.tailIdx = 0;
    }

    size(){
        return this.tailIdx - this.headIdx;
    }

    enqueue (item) {
        this.items[this.tailIdx] = item;
        this.tailIdx++;
    }
    dequeue () {
        if(this.size() > 0){
            const item = this.items[this.headIdx];
            delete this.items[this.headIdx];
            this.headIdx++;
            return item;
        }else{
            return -1;
        }
        
    }
    front () {
        return this.items[this.headIdx];
    }
    back () {
        return this.items[this.tailIdx - 1];
    }
}

let result = '';
let que = new Queue();
for(let i=1; i<= n; i++) {
    let data = input[i].split(' ');
    let order = data[0];
    switch(order) {
        case 'push':
            let num = Number(data[1]);
            que.enqueue(num);
            break;
        case 'pop':
            result += que.dequeue();
            break;
        case 'size':
            result += que.size();
            break;
        case 'empty':
            que.size() === 0 ? result += 1 : result += 0
            break;
        case 'front':
            que.size() === 0 ? result += -1 : result += que.front()
            break;
        case 'back':
            que.size() === 0 ? result += -1 : result += que.back()
            break;
    }

    if(order != 'push') result += '\n'
}

console.log(result)