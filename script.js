// const obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3
// };

// obj.d = 4;

// obj['e'] = 5;

// console.log(obj.e);

// console.log(obj);

// let storeName = 'Gucci';
// const storeDescription = {
// 	budget: 10000,
// 	employees: ['Alex', 'Chris', 'David'],
// 	products: {
// 		shoes: 500,
// 		bag: 900
// 	},
// 	open: true
// };

// console.log(storeDescription);

// const answers = [];

// answers[0] = prompt('What your name');
// answers[1] = prompt('What your surname');
// answers[2] = prompt('What your age');

// console.log(answers);
// console.log(typeof (answers));

// const activeUsers = {};

// activeUsers.user1 = prompt('userName_1');
// activeUsers.user2 = prompt('userName_1');
// activeUsers.user3 = prompt('userName_1');

// console.log(activeUsers);
// console.log(typeof (activeUsers));

let arr = [1, 2, 'три', 'четыре'];

for (let i = 0; i < arr.length; i++) {
	arr[i] = {
		0: arr[i]
	};
}

console.log(typeof (arr));
console.log(arr);