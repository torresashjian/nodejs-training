var ms = require('../mergesort/mergesort.js');
var assert = require('assert');

describe('Sort', function(){
	describe('#mergeSort()', function(){
		it('Should sort array using mergesort', function(){
			var unsortedArr = [6,5,3,1,8,7,2,4,4];
			assert.equal('1,2,3,4,4,5,6,7,8', ms.mergeSort(unsortedArr).toString());
		});
		it('Should sort empty array using mergesort', function(){
			var unsortedArr = [];
			assert.equal('', ms.mergeSort(unsortedArr).toString());
		});
		it('Should sort one element array using mergesort', function(){
			var unsortedArr = [3];
			assert.equal('3', ms.mergeSort(unsortedArr).toString());
		});
		it('Should sort two element array using mergesort', function(){
			var unsortedArr = [7,3];
			assert.equal('3,7', ms.mergeSort(unsortedArr).toString());
		});
	});
});