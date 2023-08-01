let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, ...arr] = input;

for (let i = 0; i < n; i++) {
    let M = Number(arr[i * 2].split(' ')[1])
    let queue = arr[i * 2 + 1].split(' ').map((i) => Number(i))
    let cnt = 0;

    while(true) {
        // 현재 큐의 중요도 최대값
        let maxPriority = Math.max(...queue);
        // 매 루프 마다 큐의 제일 첫번째 요소를 shift한다
        let num = queue.shift();

        /*
        - shift한 큐의 첫번째 요소와 최대값을 비교하여 최대값일 경우 cnt값을 1 올려준다
        - 최대값이 아닐경우 큐에 push 해준다
        - M은 찾고자 하는 문서의 index값이므로 push를 할때마다 1씩 빼준다
        - M이 0일때 찾고자 하는 문서를 체크할 순서이므로 최대값과 비교하고 최대값일 경우 1을 더한 cnt를 출력
        - 아닐 경우, 큐에 push하고 M값은 큐의 제일 마지막 인덱스를 넣어준다
        */
        if(M == 0){
            if(maxPriority == num){
                console.log(++cnt)
                break;
            }else{
                queue.push(num)
                M = queue.length - 1
            }
        } else {
            if(maxPriority == num){
                cnt ++;
            }else {
                queue.push(num)
            }
            M -= 1;
        }
    }
}
