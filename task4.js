const l = console.log;

const getUniqArray = (arr) => {
	let uniq = new Set();
	arr.forEach((el) => {
		if (typeof el !== 'number' || typeof el === 'boolean') {
			throw Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел');
		}
		uniq.add(el);
	});
	return Array.from(uniq);
};

l(getUniqArray(arr));
