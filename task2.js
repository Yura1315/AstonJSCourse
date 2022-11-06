const l = console.log;

const getNumberRadix = (number, radix) => {
	if (
		isNaN(number) ||
		isNaN(radix) ||
		number.toString().includes('.') ||
		radix.toString().includes('.') ||
		radix > 16 ||
		radix < 2
	) {
		throw Error('Функция getNumberRadix была вызвана с некорректными параметрами');
	}
	return String((+number).toString(+radix));
};

l(getNumberRadix(4, 2));
l(getNumberRadix('16', 8));
l(getNumberRadix('Hello', 4));
l(getNumberRadix(10, 32));
l(getNumberRadix(10, 'JS'));
