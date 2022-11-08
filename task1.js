const sum = (a, b) => {
	return isNaN(a) || isNaN(b) ? 'Не верные аргументы' : (+a + +b).toFixed(1);
};
