module.exports = function longestConsecutiveLength(array) {
  
  function findConsecutive(sortedArray) {
    let count = 1;
    let temp = 0;
    let current, next;
    for (let i = 0; i < sortedArray.length - 1; i++) {
      current = sortedArray[i];
      next = sortedArray[i + 1];
      if ((current === next - 1)) {
        count++;
      } else if (temp < count) {
        temp = count;
        count = 0;
        continue;
      }
    }
    if (count === 0) {
      return temp;
    }
    return count + 1;

  }

  function qsort(array) {
    if (array.length < 2) {
      return array;
    }

    let pivot = array[0];
    let less = [];
    let greater = [];
    for (let i = 1; i < array.length; i++) {
      if (array[i] <= pivot) {
        less[less.length] = array[i];
      } else {
        greater[greater.length] = array[i];
      }
    }
    return qsort(less).concat(pivot, qsort(greater));

  }

  // let sorted = qsort(array);
  let sorted = array.sort((a, b) => a - b);
  if (array.length === 0) {
    return 0;
  } else
    return findConsecutive(sorted);
}