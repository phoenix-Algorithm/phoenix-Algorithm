// 이모티콘 할인행사
//답안 봄

/*function makeSaleCostArr(emoticons){
    let sale=[0.6, 0.7, 0.8, 0.9];
    
    let saleCost=[];
    
    for(let i=0; i<sale.length; i++ ){
        let sale1=sale[i];
        for(let j=0; j<sale.length; j++){
            let sale2=sale[j];
            saleCost.push([100-sale1*100, 100-sale2*100,emoticons[0]*sale1,emoticons[1]*sale2]);
        }
    }
    return saleCost;
}

function solution(users, emoticons) {
    var answer = [];
    
    let saleCost=makeSaleCostArr(emoticons);
    console.log(saleCost);
    return answer;
}*/

function solution(users, emoticons) {
  let count = 0,
    money = 0;
  let allCase = [];
  let disCount = [10, 20, 30, 40];

  //모든 경우의 수를 구해줌
  function DFS(emoticons, case1) {
    if (emoticons.length < 1) {
      allCase.push(case1);
      return;
    }

    for (let i = 0; i < 4; i++) {
      DFS(emoticons.slice(1), [...case1, [disCount[i], emoticons[0]]]);
    }
  }
  //예를 들면 [[10,7000],[10,9000]]...
  DFS(emoticons, []);

  //할인된 가격 구해주기
  const disCountPrice = (a, b) => ((100 - a) / 100) * b;

  //한 가지의 경우에 대해. 예를 들면 [[10,7000],[10,9000]]
  allCase.forEach((way) => {
    let tempCount = 0,
      tempMoney = 0;

    //고객 한 명에 대해 반복
    users.forEach((user) => {
      let price = 0;

      //한 가지의 경우 각각 탐색. 예를 들면 [10,7000]
      way.forEach((info) => {
        //할인율이 원하는대로면 구매
        if (user[0] <= info[0]) price += disCountPrice(info[0], info[1]);
      });

      //총 가격이 원하는 가격보다 넘으면 이모티콘 플러스에 가입시킴
      if (price >= user[1]) tempCount++;
      //총 가격이 원하는 가격을 넘지 않으면 이모티콘 매출액에 사용자가 쓴 가격 더해주기
      else tempMoney += price;
    });

    if (count < tempCount) {
      count = tempCount;
      money = tempMoney;

      //가입자 수가 같을 때에는 더 큰 가격을 선택
      //4명 - 13800과 4명 -13860원 중에서 후자가 이득이기 때문.
    } else if (count === tempCount) {
      money = Math.max(money, tempMoney);
    }
  });

  return [count, money];
}
