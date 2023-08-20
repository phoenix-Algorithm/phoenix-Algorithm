const fs = require('fs');
let [N, distance, price] = fs.readFileSync('dev/stdin').toString().split('\n');

N = Number(N);
distance = distance.split(' ').map(Number);
price = price.split(' ').map(Number);

let min = price[0];
let sum = BigInt(0);

// min: 이전 주유소까지의 가격 중 최소 가격
// sum: 주유한 총 비용
// 주유소를 지날때마다 최소 가격을 갱신하고
// 최소 가격에 해당하는 주유소의 거리를 곱해서 총 비용에 더한다.
for (let i = 0; i < N - 1; i++) {
  if (price[i] < min) {
    min = price[i];
  }
  sum += BigInt(min * distance[i]);
}

console.log(String(sum));
