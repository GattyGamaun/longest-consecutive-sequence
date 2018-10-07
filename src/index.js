module.exports = function longestConsecutiveLength(array) {
  function findConsecutive(sortedArray) {
    let count = 0;
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
    return count;

  }
  let sorted = array.sort((a, b) => a - b);
  if (array.length === 0) {
    return 0;
  } else
    return findConsecutive(sorted);
}