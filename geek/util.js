function isInteger(obj) {
	return Math.floor(obj) === obj;
}

function getSplitNumber(value) {
	let arr = value.toString().split('.');
	let [integerPart, decimalPart] = arr;
	console.log('getSplitNumber>', value, arr, integerPart, decimalPart);
	return {
		integerPart,
		decimalPart
	};
}