//햄버거 만들기
//답안 봄

function solution(ingredient) {
  let answer = 0;
  /*let str=ingredient.join('');
    while(str.includes('1231')){
        str.replace('1231',"");
        answer++;

    }
    return answer;*/
  let arr = [];
  ingredient.forEach((el, _) => {
    arr.push(el);
    if (
      arr[arr.length - 1] === 1 &&
      arr[arr.length - 2] === 3 &&
      arr[arr.length - 3] === 2 &&
      arr[arr.length - 4] === 1
    ) {
      answer++;
      arr.pop();
      arr.pop();
      arr.pop();
      arr.pop();
    }
  });
  return answer;
}
