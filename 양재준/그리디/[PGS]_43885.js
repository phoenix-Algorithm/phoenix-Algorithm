function solution(people, limit) {
  people.sort((a, b) => b - a); // 내림차순 정렬
  let count = 0; // 보트 개수
  let left = 0; // 가장 무거운 사람
  let right = people.length - 1; // 가장 가벼운 사람

  while (left <= right) {
    // 가장 무거운 사람과 가장 가벼운 사람을 먼저 태워보고
    // 가능하다면 인덱스 한칸씩 이동, 불가능 하다면 그 다음 무거운 사람으로 태워봄
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      left++;
    }
    count++;
  }

  return count;
}
