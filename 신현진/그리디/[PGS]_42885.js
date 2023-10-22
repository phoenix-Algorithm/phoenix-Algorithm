// 구명 보트
// 답안 봄

function solution(people, limit) {
  let answer = 0;
  // 내림차순 정렬
  people.sort((a, b) => b - a);
  // 양쪽부터 (왼쪽은 증가하면서, 오른쪽은 감소하면서 ) 검사
  let left = 0;
  let right = people.length - 1;

  while (left < right) {
    // 가장 무거운 사람+ 가장 가벼운 사람의 무게가 limit보다 크면
    if (people[left] + people[right] > limit) {
      // 가장 무거운 사람을 배에 태워줌
      left++;
      // limit보다 작으면 둘 다 태워줌
    } else {
      left++;
      right--;
    }
    // 한 차례 판단 후 배 갯수 추가
    answer++;
  }
  // 만약에 사람이 한 명 이라면/계산이 모두 끝난 후 사람이 한 명만 남았을 때 배 갯수 1개 추가
  if (left == right) answer++;

  return answer;
}
