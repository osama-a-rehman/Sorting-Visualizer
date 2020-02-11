import { Observable, from, interval, of } from "rxjs";
import { map, delay } from "rxjs/operators";

export const generateBtnTitle = "Generate New Array";
export const changeSizeTitle = "Change Array Size & Sorting Speed";
export const selectSorterTitle = "Select Sorter";
export const sortTitle = "Sort";
export const minimumArraySize = 4;
export const maximumArraySize = 80;
export const minimumElementValue = 100;
export const maximumElementValue = 400;

const BUBBLE_SORT = "Bubble Sort";
const SELECTION_SORT = "Selection Sort";
const INSERTION_SORT = "Insertion Sort";
const MERGE_SORT = "Merge Sort";

export const sorters = [
	BUBBLE_SORT,
	SELECTION_SORT,
	INSERTION_SORT,
	MERGE_SORT
];

export const getRandomArray = (size = minimumArraySize) => {
	if (size < minimumArraySize || size > maximumArraySize) {
		return null;
	}

	return Array.from({ length: size }, getRandomNumber);
};

export const getRandomNumber = () => {
	return (
		Math.floor(
			Math.random() * (maximumElementValue - minimumElementValue + 1)
		) + minimumElementValue
	);
};

export const selectionSort = array => {
	const tempArray = [...array];
	const size = tempArray.length;

	const considerations = [];

	for (let i = 0; i < size - 1; i++) {
		for (let j = i + 1; j < size; j++) {
			let didSwap = false;

			if (tempArray[i] > tempArray[j]) {
				let temp = tempArray[i];
				tempArray[i] = tempArray[j];
				tempArray[j] = temp;

				didSwap = true;
			}

			considerations.push([i, j, didSwap]);
		}
	}

	return tempArray;
};

const sortFunctions = {
	[SELECTION_SORT]: selectionSort
};

export const getSorter = sorterName => {
	return sortFunctions[sorterName];
};
