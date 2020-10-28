'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	while (array.length>1){
		const middlePoint= Math.floor(array.length/2);
		if (array[middlePoint]===target || array[0]===target){
			return true
		} else {
			if (array[middlePoint]>target){
				array.splice(middlePoint)
				binarySearch(array, target)
			} else {
				array.splice(0,middlePoint)
				binarySearch(array, target)
			}
		}
	}
	return false 
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch