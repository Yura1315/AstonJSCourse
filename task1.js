const l = console.log;

const staff = {
	name: 'Alex',
	age: 20,
	skills: [
		{
			id: 1,
			value: 'html',
		},
		{
			id: 2,
			value: 'js',
		},
		{
			id: 3,
			value: 'css',
		},
	],
	cost: undefined,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...',
	knowledge: [
		{
			label: 'React JS',
			score: 7,
		},
		{
			label: 'JS',
			score: 7,
		},
		{
			label: 'CSS',
			score: 9,
		},
		{
			label: 'HTML',
			score: 10,
		},
	],
	avatar: null,
};

const deepCopyObject = (obj) => {
	let newObj = {};
	for (key in obj) {
		if (obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
			deepCopyObject(obj[key]);
		} else if (Array.isArray(obj[key])) {
			let arr = obj[key].map((el, i) => {
				el = deepCopyObject(el[i]);
			});
			newObj[key] = [...arr];
		}
		newObj[key] = obj[key];
	}
	return newObj;
};

l(deepCopyObject(staff));
