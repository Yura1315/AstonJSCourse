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
