//테스트케이스는 맞는데 14/26 맞음
//효율성 테스트 시간 초과로 실패
/**function solution(scoville, K) {
    let count=0;
    let up=false;
    for(let i=0; i<scoville.length; i++){
        scoville.sort((a,b)=>a-b);
        let newScoville=scoville.shift()+(scoville.shift()*2);
        scoville.unshift(newScoville);
        count++;
        if(scoville.every(v=>v>=K)) break;      
    }
    return scoville.every(v=>v>=K)?count:-1;
} */

module.exports = PriorityQueue;

function PriorityQueue(comparator) {
  this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}

PriorityQueue.DEFAULT_COMPARATOR = function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    a = a.toString();
    b = b.toString();

    if (a == b) return 0;

    return a > b ? 1 : -1;
  }
};

PriorityQueue.prototype.isEmpty = function () {
  return this.size() === 0;
};

PriorityQueue.prototype.peek = function () {
  if (this.isEmpty()) throw new Error("PriorityQueue is empty");

  return this._elements[0];
};

PriorityQueue.prototype.deq = function () {
  var first = this.peek();
  var last = this._elements.pop();
  var size = this.size();

  if (size === 0) return first;

  this._elements[0] = last;
  var current = 0;

  while (current < size) {
    var largest = current;
    var left = 2 * current + 1;
    var right = 2 * current + 2;

    if (left < size && this._compare(left, largest) >= 0) {
      largest = left;
    }

    if (right < size && this._compare(right, largest) >= 0) {
      largest = right;
    }

    if (largest === current) break;

    this._swap(largest, current);
    current = largest;
  }

  return first;
};

PriorityQueue.prototype.enq = function (element) {
  var size = this._elements.push(element);
  var current = size - 1;

  while (current > 0) {
    var parent = Math.floor((current - 1) / 2);

    if (this._compare(current, parent) <= 0) break;

    this._swap(parent, current);
    current = parent;
  }

  return size;
};

PriorityQueue.prototype.size = function () {
  return this._elements.length;
};

PriorityQueue.prototype.forEach = function (fn) {
  return this._elements.forEach(fn);
};

PriorityQueue.prototype._compare = function (a, b) {
  return this._comparator(this._elements[a], this._elements[b]);
};

PriorityQueue.prototype._swap = function (a, b) {
  var aux = this._elements[a];
  this._elements[a] = this._elements[b];
  this._elements[b] = aux;
};

//최소 힙
function solution(scoville, K) {
  let count = 0;
  let pq = new PriorityQueue(function (a, b) {
    return b - a;
  });

  //pq에 scoville 하나씩 넣어줌
  for (v of scoville) {
    pq.enq(v);
  }

  //pq에 요소가 2개 이상일 동안
  while (pq.size() > 1) {
    //K보다 클때는 count=0을 return
    if (pq.peek() >= K) {
      return count;
    }
    let newScoville = pq.deq() + pq.deq() * 2;
    pq.enq(newScoville);
    count++;
  }

  //요소가 하나만 남았을때
  if (pq.peek() >= K) {
    return count;
  } else {
    return -1;
  }
}
