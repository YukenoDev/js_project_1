'use strict';

// function sayHello(personName) {
// 	return `Привет, ${personName}`;
// }
// console.log(sayHello('Беку'));


// function returnNeighboringNumbers(num) {
// 	let res = [];
// 	res[0] = num - 1;
// 	res[1] = num;
// 	res[2] = num + 1;
// 	return res;
// }
// console.log(returnNeighboringNumbers(3));


// let res = ``;

// function getMathResult(num, prog) {
// 	let char = `---`;
// 	for (let i = 0; i < prog; i++) {
// 		if (typeof (prog) != 'number' && prog <= 0) {
// 			return num;
// 		} else {
// 			res = num + char + (num + num) + char;
// 		}
// 	}
// 	return res;
// }
// console.log(getMathResult(5, 0));


function getMathResult(num, times) {
	if (typeof (times) !== 'number' || times <= 0) {
		return num;
	}
	let str = '';

	for (let i = 1; i <= times; i++) {
		if (i === times) {
			str += `${num * i}`;
			// Тут без черточек в конце
		} else {
			str += `${num * i}---`;
			// Это тоже самое, что и
			// str = str + num * i + "---"
		}
	}
	return str;
}
getMathResult(10, 5);