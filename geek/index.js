// 十进制转六十四进制
function tenToSixtyFourDecimal(number) {
	const charArr = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ-~'.split('');
	if (isInteger(number)) {
		return getIntergerConvertResult(number, charArr);
	}
	let {
		integerPart,
		decimalPart
	} = getSplitNumber(number);
	console.log('11', integerPart,
		decimalPart)
	let intPart = getIntergerConvertResult(integerPart, charArr);
	let decPart = getDecimalConvertResult('0.' + decimalPart, charArr);
	return [intPart, decPart].join('.');
}

// 10进制整数转换结果
function getIntergerConvertResult(number, charArr) {
	const radix = 64;
	let arr = [];
	let quotient = number; // 商
	let remainder = 0; // 余数
	do {
		remainder = quotient % radix;
		quotient = Math.floor(quotient / radix);
		arr.unshift(charArr[remainder]);
		console.log('getIntergerConvertResult>', number, quotient, remainder, arr);
	} while (quotient)
	return arr.join('');
}

// 小数转换结果
function getDecimalConvertResult(number, charArr) {
	const radix = 64;
	let arr = [];
	let product = number; // 积
	let intPart = 0;
	let decPart = 0;
	let accuracy = 10; // 精度
	do {
		let obj = getSplitNumber(product * radix);
		intPart = obj.integerPart;
		decPart = obj.decimalPart;
		arr.push(charArr[intPart]);
		product = '0.' + decPart;
		console.log('getDecimalConvertResult>', obj, product, arr);
	} while (arr.length < accuracy && decPart)
	return arr.join('');
}

function getEleById(id) {
	return document.getElementById(id);
}