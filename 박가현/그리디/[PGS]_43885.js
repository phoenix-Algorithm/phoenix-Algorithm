function solution(people, limit) {
  people.sort((a, b) => a - b);

  let min = 0;
  let max = people.length - 1;

  while (min < max) {
    if (people[min] + people[max] <= limit) {
      min += 1;
    }
    max -= 1;
  }

  return (answer = people.length - min);
}
