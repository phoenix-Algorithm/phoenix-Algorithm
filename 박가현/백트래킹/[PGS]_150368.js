function solution(users, emoticons) {
  /*
    1. 이모티콘의 할인율 경우의 수를 다 계산한다
    2. 경우의 수마다 사용자 수와 판매액을 계산한다
    3. 계산된 사용자 수가 최대 사용자 수보다 작은 지 큰지 계산한다
     */

  let result = { user: 0, benefit: 0 };
  let temp = { user: 0, benefit: 0 };
  const percentage = [10, 20, 30, 40];
  let percentages = [];
  let selected = [];
  function dfs(arr, depth) {
    if (depth == emoticons.length) {
      percentages.push(selected.join(' '));
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      // 하나씩 원소 인덱스(index)를 확인하며
      selected.push(arr[i]); // 현재 원소 선택
      dfs(arr, depth + 1, i); // 재귀 함수 호출
      selected.pop(); // 현재 원소 선택 취소
    }
  }
  dfs(percentage, 0);
  for (let i = 0; i < percentages.length; i++) {
    const sales = percentages[i].split(' ').map(Number);
    for (let j = 0; j < users.length; j++) {
      const [userPercentage, totalPrice] = users[j];
      let price = 0;
      for (let k = 0; k < sales.length; k++) {
        if (userPercentage <= sales[k]) {
          // 자기가 생각한 할인율보다 크므로 구매
          price += Math.floor(emoticons[k] * ((100 - sales[k]) * 0.01));
        }
        // 할인하는 이모티콘을 구매한 가격과 기준 가격 비교
      }
      if (totalPrice <= price) {
        // 이모티콘 플러스 사용자 추가
        temp.user += 1;
      } else {
        // 이모티콘 플러스 사용자 아니고 판매액 추가
        temp.benefit += price;
      }
    }
    if (temp.user > result.user) {
      // 사용자가 더 많다면
      result.user = temp.user;
      result.benefit = temp.benefit;
    } else if (temp.user === result.user && temp.benefit > result.benefit) {
      // 사용자는 같지만 판매액이 더 클 때
      result.user = temp.user;
      result.benefit = temp.benefit;
    }
    temp.user = 0;
    temp.benefit = 0;
  }
  return [result.user, result.benefit];
}
