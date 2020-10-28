'use strict';

//Complete this algo
const isLoop = (linkedList) => {
  // this solution is O(n^2), while loop is n and .includes() is also n
  // const valuesInList = []
  // let currentNode = linkedList.head
  // while (currentNode !== null) {
  //   if (valuesInList.includes(currentNode.value)) return true
  //   valuesInList.push(currentNode.value)
  //   currentNode = currentNode.next
  // }
  // return false;

  // this solution is O(n)
  if (!linkedList.head) return false // handle edge case if linkedList is empty
  let firstNode = linkedList.head
  let secondNode = firstNode.next
  while (firstNode !== secondNode) { // as long as the runners are not overlapping
    if (!firstNode || !secondNode) { // if one is null, it means we reached the end
      return false
    } else {
      firstNode = firstNode.next;
      secondNode = secondNode.next.next; // second runner jumps twice
    }
  }
  return true // if the runners overlap, we know it's a loop
};

// possible edge cases:
// linkedList is empty


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
