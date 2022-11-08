const getInterval = (arr, from, to) => {
	if (typeof from !== 'number' || typeof from === 'boolean') {
		throw Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом');
	}
	if (typeof to !== 'number' || typeof to === 'boolean') {
		throw Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом');
	}
	if (!arr || !Array.isArray(arr) || arr.length < 1) {
		throw Error(
			'В функцию getInterval были переданы невалидные параметры. Параметр arr должен быть массивом и содержать числа'
		);
	}
	arr.forEach((el) => {
		if (typeof el !== 'number' || typeof el === 'boolean') {
			throw Error(
				'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения'
			);
		}
	});
	if (from > to) {
		return arr.slice(--to, from);
	}
	return arr.slice(--from, to);
};
