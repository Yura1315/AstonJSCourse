const l = console.log;

const sum = (a, b) => {
	return isNaN(a) || isNaN(b) ? 'Не верные аргументы' : (+a + +b).toFixed(1);
};

l(sum(1, 2));
l(sum(0.6, 0.7));
l(sum(0.1, 0.2));
