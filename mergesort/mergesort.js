/**
* Merge sort function
*/
exports.mergeSort = function mergeSort(arr){
	var len = arr.length;
	if (len > 1){
		var mid = len / 2;
		var left = mergeSort(arr.slice(0, mid));
		var right = mergeSort(arr.slice(mid, len ));
		return merge(left, right); 
	}
	return arr;
}

function merge(left, right) {
	var total = left.length + right.length;
	var li = 0;
	var ri = 0;
	var counter = 0;
	var mergedArr = [];
	while(counter < total){
		if (li == left.length){
			mergedArr.push(right[ri]);
			ri = ri + 1;
		} else if(ri == right.length) {
			mergedArr.push(left[li]);
			li = li + 1;
		} else if(left[li] < right[ri]){
			mergedArr.push(left[li]);
			li = li + 1;
		} else {
			mergedArr.push(right[ri]);
			ri = ri + 1;
		}
		counter = counter + 1;
	}
	return mergedArr;
}